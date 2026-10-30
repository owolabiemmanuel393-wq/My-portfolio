import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AirdropCaseStudy() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-8 md:gap-16">
        {/* Header */}
        {/* Header */}
        <CaseStudyHeader
          title="Reimagining Airdrop: Designing a History Feature for Transparency and Control"
          nextHref="/work/cv-ai"
          nextTitle="Next: CV AI Case Study"
          scope="UX Design"
          type="IOS Apple feature"
          role="Product designer"
          year="2026"
          tools="Figma, Figjam, Adobe photoshop"
          heroBanner={
            <div className="relative w-full aspect-[350/175] md:aspect-[1272/357] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] border border-black/5">
              <Image
                src="/assets/airdrop-hero-banner.png"
                alt="Reimagining Airdrop Hero Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          }
        />

        {/* Project Overview (Figma 5165:4271) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Project Overview
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            Airdrop, a widely used file sharing feature on iPhones, lacks a history function, leaving users without a record of their shared files, the absence poses challenges, particularly for frequent users, who may need to track their transfers for reference and verification, the lack of control over Airdrop visibility and the inability to manage past transfers can raise privacy concerns.
          </p>
        </section>

        {/* How Might We (Figma 5165:4274) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[42px] font-medium md:font-normal text-black leading-[26px] md:leading-tight">
            How might we help users manage their Airdrop history?
          </h2>
        </section>

        {/* Solution (Figma 5165:4277) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Solution
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I added a toggle button to the Airdrop screen, Users can decide to have their Airdrop history on or not.
          </p>
        </section>

        {/* Screen 1: Toggle Button Board (Figma 5167:4414) */}
        <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/assets/airdrop-pure-1.png"
            alt="I added a toggle button to the Airdrop screen"
            fill
            className="object-contain"
          />
        </div>

        {/* Screen 2: Airdrop history is ON Board (Figma 5167:4416) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Airdrop history is ON
          </h2>
          <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/airdrop-pure-2.png"
              alt="Airdrop history is ON"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 3: View Airdrop history screen Board (Figma 5167:4418) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            View Airdrop history screen
          </h2>
          <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/airdrop-pure-3.png"
              alt="View Airdrop history screen"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 4: The sent history screen (Figma 5165:4296) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The sent history screen
          </h2>
          <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/airdrop-pure-4.png"
              alt="The sent history screen"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 5: Clearing the history files Board (Figma 5167:4422) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Clearing the history files
          </h2>
          <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/airdrop-pure-5.png"
              alt="Clearing the history files"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Outcome (Figma 5165:4306) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Outcome
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The redesigned History feature provides a clearer and more intuitive way for users to revisit previous activities and find relevant information. By simplifying navigation and improving information accessibility, the design reduces the effort required to locate past records. My approach focused on user-centered design, intuitive navigation, and clear information hierarchy to make the experience more efficient and seamless.
          </p>
        </section>

        {/* Thank You Section (Figma 5165:4309) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Thank you for exploring this design
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I&apos;m always excited to solve real problems through intentional, user-centered design. If you&apos;re looking for a Product designer who can understand your goals and turn them into impactful solutions, I&apos;m ready to collaborate.
          </p>
        </section>

        {/* Next Project Button (Desktop only) */}
        <div className="hidden md:flex justify-center pt-4 md:pt-6 pb-8">
          <Link
            href="/work/cv-ai"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/80 transition-all text-[16px] font-medium shadow-md"
          >
            <span>Next project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
