"use client";
import AuthForm from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegisterSubmit = async (formData: FormData) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      console.log("Registration Successful:", result.data);
      router.push("/login");
    } else {
      alert(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AuthForm type="register" onSubmit={handleRegisterSubmit} />
    </div>
  );
}
