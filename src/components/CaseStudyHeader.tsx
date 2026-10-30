import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface CaseStudyHeaderProps {
  title: string;
  mobileTitle?: string;
  scope: string;
  type: string;
  role: string;
  year: string;
  tools: string;
  nextHref?: string;
  nextTitle?: string;
  heroBanner?: React.ReactNode;
}

export default function CaseStudyHeader({
  title,
  mobileTitle,
  scope,
  type,
  role,
  year,
  tools,
  heroBanner,
}: CaseStudyHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pt-2 md:pt-4 pb-2">
      {/* Back to Work Link (desktop) */}
      <div className="hidden md:block">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-black/60 hover:text-black py-1 px-2.5 -ml-2.5 rounded-full hover:bg-black/5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>
      </div>

      {/* Main Title (order-1: 24px/36px on mobile, 52px+ on desktop) */}
      <h1 className="order-1 text-[24px] sm:text-[36px] md:text-[52px] lg:text-[57px] font-normal text-black leading-[36px] md:leading-[1.18] tracking-[-0.03em] md:tracking-[-0.02em] max-w-[1300px]">
        {mobileTitle ? (
          <>
            <span className="block md:hidden">{mobileTitle}</span>
            <span className="hidden md:block">{title}</span>
          </>
        ) : (
          title
        )}
      </h1>

      {/* Hero Banner: on mobile placed directly below Title (order-2); on desktop placed below Metadata (md:order-3) */}
      {heroBanner && (
        <div className="order-2 md:order-3 w-full">
          {heroBanner}
        </div>
      )}

      {/* Project Metadata Columns: on mobile placed below Hero Banner (order-3); on desktop placed above Hero Banner (md:order-2) */}
      <div className="order-3 md:order-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 sm:gap-8 gap-y-5 sm:gap-y-6 pt-1 md:pt-2 pb-2 md:pb-4">
        <div className="flex flex-col">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] leading-[22px] md:leading-[32px] tracking-[-0.008em]">
            Project scope
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black leading-[26px] md:leading-[32px] tracking-[-0.01em]">
            {scope}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] leading-[22px] md:leading-[32px] tracking-[-0.008em]">
            Project type
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black leading-[26px] md:leading-[32px] tracking-[-0.01em]">
            {type}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] leading-[22px] md:leading-[32px] tracking-[-0.008em]">
            My Role
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black leading-[26px] md:leading-[32px] tracking-[-0.01em]">
            {role}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] leading-[22px] md:leading-[32px] tracking-[-0.008em]">
            Year
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black leading-[26px] md:leading-[32px] tracking-[-0.01em]">
            {year}
          </span>
        </div>

        <div className="hidden sm:flex flex-col">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] leading-[22px] md:leading-[32px] tracking-[-0.008em]">
            Tools
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black leading-[26px] md:leading-[32px] tracking-[-0.01em]">
            {tools}
          </span>
        </div>
      </div>
    </div>
  );
}
