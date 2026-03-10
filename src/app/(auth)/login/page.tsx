import AuthForm from "@/app/components/AuthForm";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <AuthForm type="login" />
    </div>
  );
}

export default Login;
