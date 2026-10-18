import Navbar from "@/components/Navbar";
import TabNav from "@/components/TabNav";
import SkillPills from "@/components/SkillPills";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F8]">
      <Navbar />

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
          <div>
            <TabNav currentTab="playground" />
          </div>

          <h1 className="text-[24px] sm:text-[36px] md:text-[54px] lg:text-[57px] font-normal text-black leading-[36px] md:leading-[1.18] tracking-[-0.04em] md:tracking-[-0.02em] max-w-[1280px]">
            Beyond work: concepts, experiments, and things I built for fun. This is where curiosity leads the way
          </h1>

          <SkillPills />
        </section>

        {/* Mobile Playground Cards Stack (Matching Figma 5153:324 - Frames 5153:545, 5153:613, 5153:618) */}
        <section className="flex lg:hidden flex-col gap-6 pt-4 pb-8 max-w-[390px] mx-auto w-full">
          {/* Card 1: Illustration Design */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/[0.04]">
            <div className="relative w-full aspect-[659/501]">
              <Image
                src="/assets/playground-mobile-card-1.png"
                alt="Illustration Design"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card 2: 3D Designs in Figma */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/[0.04]">
            <div className="relative w-full aspect-[658/500]">
              <Image
                src="/assets/playground-mobile-card-2.png"
                alt="3D Designs in Figma"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card 3: Podcasts */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/[0.04]">
            <div className="relative w-full aspect-[670/517]">
              <Image
                src="/assets/playground-mobile-card-3.png"
                alt="Podcasts"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Desktop Playground Items Organic Layout */}
        <section className="hidden lg:block pt-10 md:pt-16 pb-12">
          {/* Top Row: Illustration Card + Arrow + 3D Figma Card */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-[1150px] mx-auto">
            {/* Card 1: Illustration design */}
            <div className="w-[340px] sm:w-[390px] md:w-[435px] aspect-square relative lg:-rotate-[3.6deg] hover:rotate-0 transition-transform duration-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/playground-illustration.png"
                alt="Illustration design"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Connecting Arrow Doodle (Desktop only) */}
            <div className="hidden lg:block relative w-[98px] h-[110px] shrink-0 my-auto -mt-6">
              <Image
                src="/assets/arrow-curve.svg"
                alt="Connecting curve"
                fill
                className="object-contain"
              />
            </div>

            {/* Card 2: 3D designs in Figma */}
            <div className="w-[340px] sm:w-[390px] md:w-[435px] aspect-square relative lg:rotate-[4.8deg] hover:rotate-0 transition-transform duration-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/playground-calculator.png"
                alt="3D designs in Figma"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Row: Podcasts Card Centered */}
          <div className="flex justify-center mt-12 md:mt-20">
            <div className="w-[340px] sm:w-[390px] md:w-[435px] aspect-square relative lg:rotate-[3.5deg] hover:rotate-0 transition-transform duration-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/playground-podcast.png"
                alt="Podcasts"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
