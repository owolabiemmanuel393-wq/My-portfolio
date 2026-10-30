import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-16 md:mt-28">
      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 py-10 md:py-20 flex flex-col justify-between min-h-[380px] md:min-h-[420px]">
        {/* Top: Call to Action + Contact links */}
        <div className="flex flex-col gap-7 md:gap-14">
          <h2 className="text-[24px] sm:text-[34px] md:text-[48px] font-medium text-white tracking-tight leading-[1.3] md:leading-tight max-w-[900px]">
            Let’s talk about the next BIG thing!
          </h2>

          {/* Desktop Contact Links (Horizontal multi-column) */}
          <div className="hidden sm:flex flex-col gap-5 sm:gap-6">
            {/* Row 1: Email & LinkedIn */}
            <div className="flex flex-row flex-wrap items-center gap-6 sm:gap-16 lg:gap-24">
              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span className="text-[18px] md:text-[22px] font-medium text-[#707070]">
                  Email :
                </span>
                <a
                  href="mailto:Owolabiemmanuel393@gmail.com"
                  className="group inline-flex items-center gap-1.5 text-[18px] md:text-[22px] font-medium text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5"
                >
                  <span>Owolabiemmanuel393@gmail.com</span>
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-2.5">
                <span className="text-[18px] md:text-[22px] font-medium text-[#707070]">
                  Linkedin :
                </span>
                <a
                  href="https://www.linkedin.com/in/damilola-owolabi-40b081251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[18px] md:text-[22px] font-medium text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5"
                >
                  <span>Damilola Owolabi</span>
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Row 2: Instagram */}
            <div className="flex items-center gap-2.5">
              <span className="text-[18px] md:text-[22px] font-medium text-[#707070]">
                Instagram :
              </span>
              <a
                href="https://instagram.com/damilola.ux"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[18px] md:text-[22px] font-medium text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5"
              >
                <span>Damilola.UX</span>
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Contact Links (Figma 5152:152 - Vertical Stack with label on top) */}
          <div className="flex sm:hidden flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] font-medium text-[#707070]">
                Email
              </span>
              <a
                href="mailto:Owolabiemmanuel393@gmail.com"
                className="inline-flex items-center gap-1.5 text-[16px] font-medium text-white hover:text-gray-300 transition-colors py-0.5"
              >
                <span className="break-all">Owolabiemmanuel393@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 text-white shrink-0" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] font-medium text-[#707070]">
                Linkedin :
              </span>
              <a
                href="https://www.linkedin.com/in/damilola-owolabi-40b081251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[16px] font-medium text-white hover:text-gray-300 transition-colors py-0.5"
              >
                <span>Damilola Owolabi</span>
                <ArrowUpRight className="w-5 h-5 text-white shrink-0" />
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] font-medium text-[#707070]">
                Instagram :
              </span>
              <a
                href="https://instagram.com/damilola.ux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[16px] font-medium text-white hover:text-gray-300 transition-colors py-0.5"
              >
                <span>Damilola.UX</span>
                <ArrowUpRight className="w-5 h-5 text-white shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright (Figma 5152:173) */}
        <div className="pt-8 sm:pt-12 md:pt-16 mt-6">
          <p className="text-[16px] md:text-[18px] font-medium text-[#707070]">
            ©️ 2024 Damilola Owolabi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
