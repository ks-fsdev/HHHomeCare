"use client";
import InputField from "./Input";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === "login";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const endpont = isLogin ? "/api/login" : "/api/register";

      const options: RequestInit = isLogin
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
          }
        : {
            method: "POST",
            body: formData,
          };

      const res = await fetch(endpont, options);

      const result = await res.json();

      if (result.success) {
        console.log(`${type} Successful:`, result.data);
        router.push("/");
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl shadow-primary/5 border border-border-muted">
      <h2 className="text-2xl font-black text-primary tracking-tighter mb-2">
        {isLogin ? "Welcome Back, Doctor." : "Join our health force."}
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        {isLogin
          ? "Enter your credentials to access your dashboard."
          : "Create your account to start treating patients."}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {!isLogin && (
          <>
            <InputField
              label="Full Name"
              name="name"
              type="text"
              placeholder="Dr. John Doe"
              required
            />
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
            />
            <div className="md:flex gap-3">
              <InputField
                label="Specialization"
                name="specialization"
                type="text"
                placeholder="Cardiologist, Pediatrician, etc."
              />
              <InputField
                label="License Number"
                name="licenseNumber"
                type="text"
                placeholder="MD-XXXXXXX"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-primary">
                Display Picture
              </label>
              <input
                type="file"
                name="displayPicture"
                accept="image/*"
                className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary file:text-white cursor-pointer"
              />
            </div>
          </>
        )}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="doctor@gmail.com"
          required
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-secondary transition-all active:scale-95 mt-4 shadow-lg shadow-primary/20 cursor-pointer">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <div className="mt-8 text-center text-sm font-medium text-gray-500">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
          {isLogin ? "Apply Now" : "Log In"}
        </Link>
      </div>
    </motion.div>
  );
}
