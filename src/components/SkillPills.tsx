const skills = [
  "UX Research",
  "Agentic software engineering",
  "UX designer",
  "Design systems",
  "Interaction design",
  "Communication",
  "Product engineer",
  "Visual design",
  "Product thinking",
  "Mobile designer",
  "Web designer",
  "UI designer",
  "Front end knowledge",
  "AI fluency",
  "Product strategy",
  "Prototyping",
];

export default function SkillPills() {
  return (
    <div className="relative w-full flex items-center overflow-hidden pt-2 sm:pt-4 pb-2 select-none">
      {/* Left Anchor: "Technical skills" with Tunnel Mask */}
      <div className="relative z-20 bg-[#F7F7F8] pr-2.5 sm:pr-5 shrink-0 flex items-center">
        <h3 className="text-[14px] sm:text-[18px] md:text-[24px] font-medium text-[#797979] md:text-black whitespace-nowrap">
          Technical skills
        </h3>
      </div>

      {/* Tunnel Left Fade */}
      <div className="pointer-events-none absolute left-[105px] sm:left-[160px] md:left-[185px] top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#F7F7F8] to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F7F7F8] to-transparent z-10" />

      {/* Marquee Track Container */}
      <div className="overflow-hidden flex-1 relative flex items-center">
        <div className="animate-marquee flex items-center gap-2.5 md:gap-3">
          {/* First sequence of skill pills */}
          {skills.map((skill, index) => (
            <span
              key={`skill-1-${index}`}
              className="shrink-0 px-3.5 sm:px-4 md:px-5 py-1 md:py-1.5 border border-[#797979] md:border-[#797979]/50 hover:border-black rounded-full text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#797979] md:text-[#616161] hover:text-black hover:bg-black/5 transition-all duration-200 cursor-default whitespace-nowrap"
            >
              {skill}
            </span>
          ))}

          {/* Duplicate sequence for seamless infinite marquee loop */}
          {skills.map((skill, index) => (
            <span
              key={`skill-2-${index}`}
              className="shrink-0 px-3.5 sm:px-4 md:px-5 py-1 md:py-1.5 border border-[#797979] md:border-[#797979]/50 hover:border-black rounded-full text-[12px] sm:text-[14px] md:text-[16px] font-medium text-[#797979] md:text-[#616161] hover:text-black hover:bg-black/5 transition-all duration-200 cursor-default whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
