import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CvAiCaseStudy() {
  const goals = [
    "Make CV creation easier by giving users a simple, guided process instead of starting with a blank page.",
    "Use AI to improve CV content by helping users write stronger descriptions of their experience and skills.",
    "Help users tailor their CVs to specific jobs by suggesting relevant skills, keywords, and improvements based on the job role.",
    "Keep users in control by allowing them to review, edit, accept, or reject AI-generated content.",
    "Create a simple and professional experience that makes it easy for users to create, review, and export their CV.",
    "Explore how AI can improve an everyday product experience without making the product feel complicated or overly automated.",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-8 md:gap-16">
        {/* Header */}
        <CaseStudyHeader
          title="Helping job seekers create better CVs with AI"
          scope="User Interface Design"
          type="B2C, Travel Platform"
          role="UI/UX designer"
          year="2026"
          tools="Figma, Figjam, Adobe photoshop"
          heroBanner={
            <div className="relative w-full aspect-[350/177] md:aspect-[1275/357] rounded-2xl overflow-hidden border border-[#D0D0D0] bg-[#F2F2F2]">
              <Image
                src="/assets/cv-hero-banner.png"
                alt="CV AI Hero Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
          }
        />

        {/* The Problem (Figma 5153:961) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The Problem
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            Creating a CV can be difficult, especially when you don&apos;t know how to properly present your experience. Many people have the skills and experience needed for a job, but struggle to turn that experience into strong CV content. They also have to make sure their CV matches the job they are applying for. I wanted to explore how AI could help with this process without completely taking control away from the user.
          </p>
        </section>

        {/* Project Goals (Figma 5153:964) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Project Goals
          </h2>
          <ul className="flex flex-col gap-2 text-[16px] md:text-[19px] font-normal text-black list-disc list-outside pl-5 leading-[36px] md:leading-relaxed">
            {goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </section>

        {/* User Flow Board */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            User flow
          </h2>
          <div className="relative w-full aspect-[2568/612] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/cv-userflow-pure.png"
              alt="User flow"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Mid Fidelity Design (Web) Board */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Mid fidelity design (Web)
          </h2>
          <div className="relative w-full aspect-[2568/918] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/cv-midfi-web-pure.png"
              alt="Mid fidelity design (Web)"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* High Fidelity Design (Web) Board */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            High fidelity design (Web)
          </h2>
          <div className="relative w-full aspect-[2568/1132] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/cv-hifi-web-pure.png"
              alt="High fidelity design (Web)"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* High Fidelity Design (Mobile) Board */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            High fidelity design (Mobile)
          </h2>
          <div className="relative w-full aspect-[2568/2232] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/cv-hifi-mobile-pure.png"
              alt="High fidelity design (Mobile)"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Style Guide Board */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-medium text-black leading-tight">
            Style Guide
          </h2>
          <div className="relative w-full aspect-[2568/1154] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/cv-styleguide-pure.png"
              alt="Style Guide"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Outcome (Figma 5153:1032) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-medium text-black leading-tight">
            Outcome
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I designed a user-friendly interface for an AI-powered CV builder that helps users organize their job application process in one place. The experience brings together CV creation, cover letter generation, job recommendations, and application history through a clear visual hierarchy and intuitive navigation. This project strengthened my understanding of how to translate product requirements into accessible, cohesive interfaces while designing around user needs and simplifying complex workflows. The completed UI was handed over to a developer for implementation.
          </p>
        </section>

        {/* What I learned (Figma 5153:1035) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-medium text-black leading-tight">
            What I learned
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            This project helped me understand the importance of aligning interface decisions with the product&apos;s intended functionality. I learned to structure complex features into clear user journeys, maintain consistency across multiple screens, and consider how users move between related tasks. It also reinforced the importance of collaborating with developers to ensure that design decisions can be translated into a functional product.
          </p>
        </section>

        {/* Thank You Section (Figma 5153:1038) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px] pt-2 md:pt-4">
          <h2 className="text-[20px] md:text-[38px] font-medium text-black leading-tight">
            Thank you for exploring this design
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I&apos;m always excited to solve real problems through intentional, user-centered design. If you&apos;re looking for a Product designer who can understand your goals and turn them into impactful solutions, I&apos;m ready to collaborate.
          </p>
        </section>

        {/* Next Project Button (Desktop only) */}
        <div className="hidden md:flex justify-center pt-4 md:pt-6 pb-8">
          <Link
            href="/work/instagram"
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
