import { connectDB } from "@/lib/db";
import Doctor from "@/models/Doctor";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: "missing email or password",
        },
        { status: 400 },
      );
    }

    const doctor = await Doctor.findOne({ email }).select("+password");

    if (!doctor) {
      return NextResponse.json(
        {
          success: false,
          error: "email not found",
        },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          error: "wrong password",
        },
        { status: 401 },
      );
    }

    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    const sanitizedDoctor = doctor.toObject();
    delete sanitizedDoctor.password;

    const response = NextResponse.json(
      { success: true, data: sanitizedDoctor },
      { status: 200 },
    );

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
