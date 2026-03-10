"use client";
import InputField from "./Input";
import Link from "next/link";
import { motion } from "framer-motion";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === "login";

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // * will add backend later
    console.log(`Executing ${type}...`, data);
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
          </>
        )}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="doctor@elitecare.com"
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
