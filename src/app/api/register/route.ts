import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Doctor from "@/models/Doctor";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
  try {
    await connectDB();

    // * parsing form data
    const formData = await req.formData();

    const file = formData.get("displayPicture") as File | null;
    let displayPictureUrl = "";

    if (file && file.size > 0) {
      const image = await put(`doctors/${Date.now()}-${file.name}`, file, {
        access: "public",
      });
      displayPictureUrl = image.url;
    }

    const doctorData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      licenseNumber: formData.get("licenseNumber"),
      specialization: formData.get("specialization"),
      displayPicture: displayPictureUrl,
    };

    const newDoctor = await Doctor.create(doctorData);

    return NextResponse.json(
      { success: true, data: newDoctor },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
