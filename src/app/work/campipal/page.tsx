import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CampipalCaseStudy() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      <div className="w-full max-w-[1512px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-16 md:gap-20">
        <CaseStudyHeader
          title="Building a Student Focused Marketplace and Wallet Experience for Campipal"
          nextHref="/work/airdrop"
          nextTitle="Next: Airdrop Case Study"
          scope="Product Design & Wallet UX"
          type="Fintech & Campus Marketplace"
          role="Lead Product Designer"
          year="2025"
          tools="Figma, Figjam, Notion"
        />

        <div className="w-full h-[360px] sm:h-[480px] md:h-[620px] rounded-[24px] overflow-hidden relative shadow-sm bg-gradient-to-br from-[#A3C2A9] to-[#CCE0D1] border border-black/5 flex items-center justify-center">
          <Image
            src="/assets/card-campipal.png"
            alt="Campipal Showcase"
            fill
            className="object-contain p-4 md:p-8"
            priority
          />
        </div>

        <section className="flex flex-col gap-6 max-w-[1200px]">
          <h2 className="text-[32px] sm:text-[40px] md:text-[45px] font-medium text-black">
            Project Overview
          </h2>
          <p className="text-[18px] sm:text-[22px] md:text-[24px] font-normal text-[#616161] leading-relaxed">
            Campipal is a dedicated digital ecosystem engineered for college students, enabling seamless campus commerce, peer-to-peer payments, and verified student-to-student transactions.
          </p>
        </section>

        <section className="flex flex-col gap-6 max-w-[1200px] pb-4">
          <h2 className="text-[32px] sm:text-[40px] md:text-[45px] font-medium text-black">
            Key Highlights
          </h2>
          <ul className="flex flex-col gap-4 text-[18px] sm:text-[20px] font-normal text-black list-disc list-inside">
            <li>End-to-end peer payment flows tailored for campus micro-transactions</li>
            <li>In-app escrow protection ensuring high trust between student buyers and sellers</li>
            <li>Fluid mobile-first design system with accessible contrast and touch-friendly controls</li>
            <li>Comprehensive design tokens supporting smooth dark/light mode thematic shifts</li>
          </ul>
        </section>

        {/* Next Project Button */}
        <div className="flex justify-center pt-6 pb-12">
          <Link
            href="/work/airdrop"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/80 transition-all text-[16px] font-medium shadow-md"
          >
            <span>Next project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
