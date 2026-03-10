import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Doctor from "@/models/Doctor";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const newDoctor = await Doctor.create(body);

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
