"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LuxuryHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="custom-header">
      <div className="basic-padding h-24 flexing-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-primary rounded-lg flexing-center transform group-hover:rotate-45 custom-transition">
            <span className="text-white font-bold text-2xl -mt-1 group-hover:-rotate-45 custom-transition">
              +
            </span>
          </div>
          <span className=" text-2xl font-black text-primary tracking-tighter">
            Heart Healing <span className="text-secondary">Homecare</span>
          </span>
        </Link>

        {isLoggedIn && (
          <div className="hidden lg:flex items-center gap-12 text-[15px] font-semibold text-nav-text">
            {[
              "Find Experts",
              "Wellness Programs",
              "Pharmacy",
              "The Network",
            ].map((item) => {
              const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={item}
                  href={href}
                  className={`hover:text-primary transition-all relative group ${
                    isActive ? "text-primary" : ""
                  }`}>
                  {item}

                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                      opacity: 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-primary 
                      ${!isActive ? "group-hover:w-full" : ""} 
                      transition-[width] duration-300 ease-in-out
                    `}
                  />
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-8">
          {!isLoggedIn && (
            <button className="hidden cursor-pointer sm:block text-sm font-bold text-[#0D4D4D] hover:opacity-60 transition-opacity">
              Doctor Log in
            </button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary cursor-pointer text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_10px_30px_rgba(13,77,77,0.2)]">
            {!isLoggedIn ? "Get Started" : "Check Calender"}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
