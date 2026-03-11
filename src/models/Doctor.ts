import { Schema, model, models } from "mongoose";

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    displayPicture: { type: String, default: "" },
  },
  { timestamps: true },
);

const Doctor = models.Doctor || model("Doctor", doctorSchema);
export default Doctor;
