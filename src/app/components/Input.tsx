"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-bold text-primary">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          className="w-full px-5 py-3.5 rounded-xl border border-[var(--color-border-muted)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all placeholder:text-gray-300"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)] transition-colors cursor-pointer">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
