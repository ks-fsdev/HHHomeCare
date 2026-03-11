import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        <div className="h-10 w-10 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute h-10 w-10 border-4 border-[#0D4D4D] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <p className="mt-6 text-sm font-bold text-primary tracking-widest uppercase animate-pulse">
        Securing Environment...
      </p>
    </div>
  );
}

export default Loader;
