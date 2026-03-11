"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F0F7F7] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0D4D4D]/5 rounded-l-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#E0EEEE] mb-8">
            <CheckCircle2 size={16} className="text-[#097d7d]" />
            <span className="text-xs font-bold text-[#0D4D4D] uppercase tracking-widest">
              Connect to verified patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-7xl font-black text-[#0D4D4D] leading-[1.1] tracking-tighter mb-8">
            Allow your practice <br />
            to reach <span className="text-[#097d7d]">needy</span> patients.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#445555] max-w-xl mb-12 leading-relaxed">
            Stop chasing leads. Integrate your services into the world's most
            exclusive medical ecosystem and find the patients who are looking
            for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="flex flex-col md:flex-row items-center bg-white p-2 px-4 rounded-3xl shadow-[0_20px_50px_rgba(13,77,77,0.1)] border border-[#E0EEEE]">
            <div className="flex items-center flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-[#F0F7F7]">
              <Globe className="text-[#097d7d] mr-3" size={20} />
              <input
                type="text"
                placeholder="Business Email"
                className="w-full outline-none text-[#0D4D4D] font-medium placeholder:text-gray-300"
              />
            </div>
            <div className="flex items-center flex-[2] px-6 py-4">
              <Rocket className="text-[#097d7d] mr-3" size={20} />
              <input
                type="text"
                placeholder="Medical License / Speciality"
                className="w-full outline-none text-[#0D4D4D] font-medium placeholder:text-gray-300"
              />
            </div>
            <Link href="/register" className="text-white">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#097d7d] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0D4D4D] cursor-pointer transition-all whitespace-nowrap">
                Apply to Join
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
