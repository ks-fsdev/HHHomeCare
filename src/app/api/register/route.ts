import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Doctor from "@/models/Doctor";
import { put } from "@vercel/blob";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    // * parsing form data
    const formData = await req.formData();

    // * getting raw password
    const rawPassword = formData.get("password") as string;

    if (!rawPassword || typeof rawPassword !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "password is missing",
        },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);

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
      password: hashedPassword,
      phone: formData.get("phone"),
      licenseNumber: formData.get("licenseNumber"),
      specialization: formData.get("specialization"),
      displayPicture: displayPictureUrl,
    };

    const newDoctor = await Doctor.create(doctorData);

    const sanitizedDoctor = newDoctor.toObject();
    delete sanitizedDoctor.password;

    return NextResponse.json(
      { success: true, data: sanitizedDoctor },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
