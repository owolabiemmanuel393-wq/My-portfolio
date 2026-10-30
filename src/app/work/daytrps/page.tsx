import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DaytrpsCaseStudy() {
  const goals = [
    "Redesign the homepage and core screens to improve aesthetics and usability",
    "Developed a Style guide to ensure consistency in design elements",
    "Showcase the core features.",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-8 md:gap-16">
        {/* Header */}
        <CaseStudyHeader
          title="Redesigning the Daytrps Website for a More Visually Engaging User Experience"
          mobileTitle="Reimagining Airdrop: Designing a History Feature for Transparency and Control"
          nextHref="/work/airdrop"
          nextTitle="Next: Airdrop Case Study"
          scope="MVP"
          type="B2C, Travel Platform"
          role="Product designer"
          year="2026"
          tools="Figma, Figjam, Adobe photoshop"
          heroBanner={
            <div className="relative w-full aspect-[350/175] md:aspect-[1272/357] rounded-2xl overflow-hidden bg-gradient-to-br from-[#B6C8E6] to-[#D5E2F5] border border-black/5">
              <Image
                src="/assets/daytrps-hero-banner.png"
                alt="Daytrps Hero Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          }
        />

        {/* Project Overview (Figma 5165:2596) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Project Overview
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            Daytrps is a personalized daycation planning platform that helps users discover and plan local adventures based on their preferences, time, and budget.
          </p>
        </section>

        {/* The Problem (Figma 5165:2599) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The Problem
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The previous website lacked visual hierarchy, modern design aesthetics, and user experience principles making it difficult for users to understand the platform’s value and plan trips smoothly.
          </p>
        </section>

        {/* The Task (Figma 5165:2602) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The Task
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I was tasked to redesign the Daytrps website from the ground up. The goal was to enhance usability, apply core UX laws, and improve the visual interface for better engagement and trust.
          </p>
        </section>

        {/* Project Goals (Figma 5165:2605) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Project Goals
          </h2>
          <ul className="flex flex-col gap-2 text-[16px] md:text-[19px] font-normal text-black list-disc list-outside pl-5 leading-[36px] md:leading-relaxed">
            {goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </section>

        {/* The Redesign of the Hero section (Figma 5165:2609) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The Redesign of the Hero section of the Landing page
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The redesigned hero section leverages the Aesthetic-Usability Effect — the principle that users perceive aesthetically pleasing interfaces as more usable, even when minor usability issues exist. By introducing visual harmony, clean layout, and emotionally engaging elements, this section builds instant trust, reduces user hesitation, and encourages exploration from the very first interaction.
          </p>
        </section>

        {/* Desktop Redesign Showcase (Figma 5167:4373) */}
        <div className="relative w-full aspect-[351/296] md:aspect-[1272/1072] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/assets/daytrps-desktop-showcase.png"
            alt="Daytrps Desktop Redesign"
            fill
            className="object-contain"
          />
        </div>

        {/* Mobile Screens Showcase (Figma 5167:4371) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            High fidelity design (Mobile)
          </h2>
          <div className="relative w-full aspect-[350/343] md:aspect-[1280/1246] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/daytrps-mobile-showcase.png"
              alt="Daytrps Mobile Experience"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Outcome (Figma 5165:3391) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Outcome
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The DayTrps website redesign focused on creating a more intuitive and cohesive experience for users exploring trips and planning activities. By rethinking the interface, improving content hierarchy, and streamlining key user journeys, the redesign aims to make discovering and navigating trip options more straightforward. The project allowed me to apply user-centered design principles to improve usability while maintaining a consistent visual experience across the platform.
          </p>
        </section>

        {/* What I Learned (Figma 5165:3394) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            What I Learned
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            Working on DayTrps helped me understand the importance of designing a cohesive user journey rather than focusing only on individual screens. I learned how visual hierarchy, clear navigation, and consistent design patterns can help users explore trip options and move through a travel platform more intuitively. The project also reinforced the importance of considering the user&apos;s goals at every stage of the experience, from discovering activities to deciding what best suits their needs.
          </p>
        </section>

        {/* Thank You Section (Figma 5165:3397 / Image 4) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Thank you for exploring this design
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I&apos;m always excited to solve real problems through intentional, user-centered design. If you&apos;re looking for a Product designer who can understand your goals and turn them into impactful solutions, I&apos;m ready to collaborate.
          </p>
        </section>

        {/* Next Project Button */}
        <div className="flex justify-center pt-6 pb-12">
          <Link
            href="/work/airdrop"
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
