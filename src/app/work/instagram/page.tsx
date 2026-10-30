import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function InstagramCaseStudy() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-8 md:gap-16">
        {/* Header */}
        {/* Header */}
        <CaseStudyHeader
          title="Organizing the Chaos: A UX Concept to Add Filters to Instagram’s Saved Post"
          nextHref="/work/daytrps"
          nextTitle="Next: Daytrps Case Study"
          scope="User Experience Design"
          type="Social media"
          role="Product designer"
          year="2026"
          tools="Figma, Figjam, Adobe photoshop"
          heroBanner={
            <div className="relative w-full aspect-[350/175] md:aspect-[1272/357] rounded-2xl overflow-hidden bg-gradient-to-br from-[#BFB0E8] to-[#DDD2F5] border border-black/5">
              <Image
                src="/assets/ig-hero-banner.png"
                alt="Instagram Filters Case Study Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          }
        />

        {/* Project Overview (Figma 5165:2423) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Project Overview
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The Objective of the project is to enhance user experience by minimizing endless scrolling on Instagram’s saved post section.
          </p>
        </section>

        {/* How Might We (Figma 5165:2426) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[42px] font-medium md:font-normal text-black leading-[26px] md:leading-tight">
            “How might we help simplify the process of finding specify saved post on Instagram?”
          </h2>
        </section>

        {/* Solution (Figma 5165:2428) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Solution
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            I Introduced a filter allowing users to sort saved posts by month and year, providing quicker access to older posts and improving content retrieval efficiency.
          </p>
        </section>

        {/* Screen 1 Card: Instagram current design (Figma 5172:4565) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-medium text-black leading-tight">
            Instagram current design
          </h2>
          <div className="relative w-full aspect-[350/198] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/ig-pure-1.png"
              alt="Instagram current design"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 2 Card: I added a filter to solve the problem (Figma 5165:4316) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            I added a filter to solve the problem
          </h2>
          <div className="relative w-full aspect-[350/196] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/ig-pure-2.png"
              alt="I added a filter to solve the problem"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 3 Card: I added a scrolling animation to select the Month and Year (Figma 5165:4315) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            I added a scrolling animation to select the Month and Year
          </h2>
          <div className="relative w-full aspect-[350/196] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/ig-pure-3.png"
              alt="I added a scrolling animation to select the Month and Year"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 4 Card: The screen after selecting the Month and Year (Figma 5165:4314) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The screen after selecting the Month and Year
          </h2>
          <div className="relative w-full aspect-[350/196] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/ig-pure-4.png"
              alt="The screen after selecting the Month and Year"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Screen 5 Card: The screen after scrolling down (Figma 5165:4313) */}
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            The screen after scrolling down to the posts saved since the beginning of the Month
          </h2>
          <div className="relative w-full aspect-[350/196] md:aspect-[1272/721] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/ig-pure-5.png"
              alt="The screen after scrolling down to the posts saved since the beginning of the Month"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Outcome (Figma 5165:2467) */}
        <section className="flex flex-col gap-3 md:gap-4 max-w-[1240px]">
          <h2 className="text-[20px] md:text-[38px] font-normal text-black leading-tight">
            Outcome
          </h2>
          <p className="text-[16px] md:text-[19px] font-normal text-black leading-[36px] md:leading-relaxed">
            The proposed Saved Posts filtering experience makes it easier for users to rediscover previously saved content without endlessly scrolling through their collections. By introducing time-based filtering, users can narrow down their saved posts and locate relevant content more efficiently. The design focuses on reducing search friction, improving content discoverability, and creating a more intuitive way to manage saved posts.
          </p>
        </section>

        {/* Closing / Thank you (Figma 5165:2468) */}
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
            href="/work/daytrps"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#DCB3B3] text-black hover:opacity-90 transition-all text-[16px] font-medium shadow-sm"
          >
            <span>Next project</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
