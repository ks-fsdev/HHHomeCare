"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LuxuryHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-[#E0EEEE] shadow-lg">
      <div className="basic-padding h-24 flexing-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-[#0D4D4D] rounded-lg flexing-center transform group-hover:rotate-45 transition-transform duration-300">
            <span className="text-white font-bold text-2xl -mt-1 group-hover:-rotate-45 transition-transform duration-300">
              +
            </span>
          </div>
          <span className=" text-2xl font-black text-[#0D4D4D] tracking-tighter">
            HHH <span className="text-[#097d7d]">Care</span>
          </span>
        </div>

        {isLoggedIn && (
          <div className="hidden lg:flex items-center gap-12 text-[15px] font-semibold text-[#445555]">
            {[
              "Find Experts",
              "Wellness Programs",
              "Pharmacy",
              "The Network",
            ].map((item, i) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#0D4D4D] transition-all relative group">
                {item}
                <motion.span className="absolute cursor-pointer -bottom-1 left-0 w-0 h-0.5 bg-[#0D4D4D] group-hover:w-full transition-all" />
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-8">
          <button className="hidden cursor-pointer sm:block text-sm font-bold text-[#0D4D4D] hover:opacity-60 transition-opacity">
            Doctor Log in
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0D4D4D] cursor-pointer text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_10px_30px_rgba(13,77,77,0.2)]">
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
