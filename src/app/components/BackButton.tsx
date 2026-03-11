"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: 0}}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        x: -5,
        backgroundColor: "#0D4D4D",
        color: "#FFFFFF",
      }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push("/")}
      className="fixed top-8 left-8 flex items-center gap-2 px-5 py-2.5 cursor-pointer bg-white border border-[#E0EEEE] text-[#0D4D4D] font-bold rounded-xl shadow-sm transition-all z-50 hover:bg-[#0D4D4D] hover:text-white">
      <ArrowLeft size={18} />
      <span>Return to Home</span>
    </motion.button>
  );
}
