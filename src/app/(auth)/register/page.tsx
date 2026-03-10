import AuthForm from "@/app/components/AuthForm";
import React from "react";

function Register() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AuthForm type="register" />
    </div>
  );
}

export default Register;
