"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Instagram, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F7F7F8]/95 backdrop-blur-md border-b border-black/[0.04] transition-all">
        <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 py-3.5 md:py-5 flex items-center justify-between">
          {/* Left: Avatar + Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group">
            {/* Mobile: 40x40 circle with stroke; Desktop: responsive up to 64px */}
            <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#D6D6D6] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/avatar.png"
                alt="Damilola Owolabi"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[14px] md:text-[16px] font-medium text-black leading-tight group-hover:opacity-80 transition-opacity">
                Damilola Owolabi
              </span>
              <span className="text-[12px] md:text-[14px] font-normal text-[#696969] md:text-[#616161] leading-tight mt-0.5">
                Product Designer/Agentic software engineer
              </span>
            </div>
          </Link>

          {/* Desktop Right: Direct Social Links */}
          <div className="hidden md:flex items-center gap-3 sm:gap-5 text-black">
            <a
              href="mailto:Owolabiemmanuel393@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Damilola"
              className="p-2 sm:p-2.5 rounded-full hover:bg-black/5 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5 stroke-[1.8]" />
            </a>
            <a
              href="https://www.linkedin.com/in/damilola-owolabi-40b081251"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 sm:p-2.5 rounded-full hover:bg-black/5 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5 stroke-[1.8]" />
            </a>
            <a
              href="https://instagram.com/damilola.ux"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2 sm:p-2.5 rounded-full hover:bg-black/5 hover:text-black transition-colors"
            >
              <Instagram className="w-5 h-5 stroke-[1.8]" />
            </a>
          </div>

          {/* Mobile Right: Hamburger Menu Button (Figma 5174:4701) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-1 rounded-lg text-black hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              <div className="w-8 h-8 relative flex items-center justify-center">
                <Image
                  src="/assets/icon-mobile-menu.svg"
                  alt="Menu"
                  width={24}
                  height={18}
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu Bar Modal (Figma 5172:4650 - Image 2) */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm animate-fadeIn md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-full max-w-[350px] bg-[#F7F7F8] rounded-[24px] overflow-hidden shadow-2xl border border-black/5 py-4 transition-transform transform duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close X */}
            <div className="flex items-center justify-end px-5 pt-1 pb-2">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-1 text-[#8E8E93] hover:text-black transition-colors focus:outline-none"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Menu Items (Centered horizontally with dividers) */}
            <nav className="flex flex-col pb-2">
              {/* Item 1: Gmail */}
              <a
                href="mailto:Owolabiemmanuel393@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3.5 h-[52px] border-b border-[#DDDDDD] hover:bg-black/5 transition-colors group"
              >
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src="/assets/mobile-menu-gmail.svg"
                    alt="Gmail"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-[16px] font-normal text-black group-hover:text-black/80">
                  Gmail
                </span>
              </a>

              {/* Item 2: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/damilola-owolabi-40b081251"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3.5 h-[52px] border-b border-[#DDDDDD] hover:bg-black/5 transition-colors group"
              >
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src="/assets/mobile-menu-linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-[16px] font-normal text-black group-hover:text-black/80">
                  Linkedin
                </span>
              </a>

              {/* Item 3: Instagram */}
              <a
                href="https://instagram.com/damilola.ux"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3.5 h-[52px] hover:bg-black/5 transition-colors group"
              >
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src="/assets/mobile-menu-instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-[16px] font-normal text-black group-hover:text-black/80">
                  Instagram
                </span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
