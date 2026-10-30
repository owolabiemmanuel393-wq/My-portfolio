import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category?: string;
  imageSrc: string;
  imageBgColor?: string;
  href: string;
}

export default function ProjectCard({
  title,
  category = "2025/2026 - Product Design",
  imageSrc,
  imageBgColor,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-[24px] p-2.5 pb-5 sm:pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-black/[0.04]"
    >
      {/* Image Preview Container (330x177 on mobile, 604x341 on desktop) */}
      <div className="w-full aspect-[330/177] md:aspect-[604/341] rounded-[16px] overflow-hidden relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.99]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Info */}
      <div className="pt-3 sm:pt-5 px-1 sm:px-3 flex flex-col gap-1 sm:gap-2">
        <span className="text-[14px] md:text-[22px] font-semibold md:font-medium text-[#626262] md:text-[#616161]">
          {category}
        </span>
        <h3 className="text-[16px] sm:text-[22px] md:text-[28px] font-medium md:font-normal text-black leading-snug group-hover:text-black/80 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
