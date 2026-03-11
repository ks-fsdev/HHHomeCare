"use client";
import AuthForm from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLoginSubmit = async (formData: FormData) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await res.json();

    if (result.success) {
      console.log("Login Successful:", result.data);
      router.push("/");
    } else {
      alert(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AuthForm type="login" onSubmit={handleLoginSubmit} />
    </div>
  );
}
