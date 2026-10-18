import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeaderProps {
  title: string;
  scope: string;
  type: string;
  role: string;
  year: string;
  tools: string;
  nextHref?: string;
  nextTitle?: string;
}

export default function CaseStudyHeader({
  title,
  scope,
  type,
  role,
  year,
  tools,
}: CaseStudyHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 pt-2 md:pt-4 pb-2">
      {/* Back to Work Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-black/60 hover:text-black py-1 px-2.5 -ml-2.5 rounded-full hover:bg-black/5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>
      </div>

      {/* Main Title (Figma 24px/31px on mobile) */}
      <h1 className="text-[24px] sm:text-[36px] md:text-[52px] lg:text-[57px] font-normal text-black leading-[32px] md:leading-[1.18] tracking-[-0.03em] md:tracking-[-0.02em] max-w-[1300px]">
        {title}
      </h1>

      {/* Project Metadata Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-4 sm:gap-8 pt-1 md:pt-2 pb-2 md:pb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] tracking-wider uppercase">
            PROJECT SCOPE
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black">
            {scope}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] tracking-wider uppercase">
            PROJECT TYPE
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black">
            {type}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] tracking-wider uppercase">
            MY ROLE
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black">
            {role}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] tracking-wider uppercase">
            YEAR
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black">
            {year}
          </span>
        </div>

        <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
          <span className="text-[12px] sm:text-[14px] font-medium text-[#757575] tracking-wider uppercase">
            TOOLS
          </span>
          <span className="text-[16px] sm:text-[20px] font-medium text-black">
            {tools}
          </span>
        </div>
      </div>
    </div>
  );
}
