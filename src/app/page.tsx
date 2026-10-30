import Navbar from "@/components/Navbar";
import TabNav from "@/components/TabNav";
import SkillPills from "@/components/SkillPills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      id: "daytrps",
      title: "Redesigning the Daytrps Website for a More Visually Engaging User experience",
      category: "2026 - Product Design",
      imageSrc: "/assets/card-daytrps-pure.png",
      href: "/work/daytrps",
    },
    {
      id: "instagram",
      title: "Organizing the Chaos: A UX Concept to Add Filters to Instagram’s Saved Post",
      category: "2026 - Product Design",
      imageSrc: "/assets/card-instagram-pure.png",
      href: "/work/instagram",
    },
    {
      id: "cv-ai",
      title: "Helping job seekers create better CVs with AI",
      category: "2026 - Product Design",
      imageSrc: "/assets/card-cv-pure.png",
      href: "/work/cv-ai",
    },
    {
      id: "airdrop",
      title: "Reimagining Airdrop: Designing a History Feature for Transparency and Control",
      category: "2026 - Product Design",
      imageSrc: "/assets/card-airdrop-pure.png",
      href: "/work/airdrop",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

      {/* Main Container */}
      <div className="w-full max-w-[1512px] mx-auto px-5 sm:px-12 md:px-20 lg:px-28 flex-1 flex flex-col gap-6 md:gap-14 pt-3 md:pt-4">
        {/* Mobile Top Process Graphic (Figma 5167:4387 - with the 317px gap from header as shown in Image 3) */}
        <div className="block md:hidden w-full max-w-[350px] mx-auto relative aspect-[350/120] select-none pointer-events-none mt-[280px] sm:mt-[317px] mb-8">
          <Image
            src="/assets/mobile-hero-process.png"
            alt="Design Process: Think, Plan, Ship"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Top Doodles Graphic */}
        <div className="hidden md:block w-full relative h-[180px] md:h-[220px] select-none pointer-events-none">
          <Image
            src="/assets/hero-doodles.svg"
            alt="Hero decorative doodles"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Hero Section */}
        <section className="flex flex-col gap-5 md:gap-8">
          {/* Navigation Tabs */}
          <div>
            <TabNav currentTab="work" />
          </div>

          {/* Headline (Figma 5145:1596 - 24px/36px on mobile) */}
          <h1 className="text-[24px] sm:text-[36px] md:text-[54px] lg:text-[57px] font-normal text-black leading-[36px] md:leading-[1.18] tracking-[-0.04em] md:tracking-[-0.02em] max-w-[1280px]">
            I build impactful software products by combining product thinking, user centered design, and agentic engineering
          </h1>

          {/* Technical Skills Pills */}
          <SkillPills />
        </section>

        {/* Selected Works Section */}
        <section className="flex flex-col gap-5 md:gap-12 pt-4 md:pt-6">
          <h2 className="text-[24px] sm:text-[36px] md:text-[54px] lg:text-[57px] font-normal text-black leading-[36px] md:leading-[1.18] tracking-[-0.02em]">
            Selected works
          </h2>

          <div className="flex flex-col gap-5 sm:gap-6 md:grid md:grid-cols-2 md:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                href={project.href}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
