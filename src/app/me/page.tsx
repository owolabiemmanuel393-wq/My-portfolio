import Navbar from "@/components/Navbar";
import TabNav from "@/components/TabNav";
import SkillPills from "@/components/SkillPills";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function MePage() {
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
            <TabNav currentTab="me" />
          </div>

          <h1 className="text-[24px] sm:text-[36px] md:text-[54px] lg:text-[57px] font-normal text-black leading-[36px] md:leading-[1.18] tracking-[-0.04em] md:tracking-[-0.02em] max-w-[1280px]">
            I am Damilola, a product designer passionate about solving problems and creating experiences people enjoy using.
          </h1>

          <SkillPills />
        </section>

        {/* Section 1: Podcasts / Conversations */}
        {/* Mobile View (Figma 5153:465 - Individual Podcast Cards Stack) */}
        <section className="flex lg:hidden flex-col gap-5 pt-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-medium text-black leading-tight">
              Conversations That Inspire My Work
            </h2>
            <p className="text-[17px] sm:text-[20px] font-normal text-[#676767] leading-[32px]">
              Whether I&apos;m commuting, working out, or taking a break, these podcasts challenge my assumptions, spark new ideas, and inspire me to think differently about products and people.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 pt-2">
            <div className="w-full max-w-[350px] mx-auto aspect-[349/81] relative rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src="/assets/podcast-jim-rohn.png"
                alt="Jim Rohn - Jim Rohn Talks"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[350px] mx-auto aspect-[349/81] relative rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src="/assets/podcast-ebuka.png"
                alt="Mentality with Ebuka - Ebuka Obi-Uchendu"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[350px] mx-auto aspect-[349/81] relative rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src="/assets/podcast-celebration.png"
                alt="Celebration Church International - Endless life with Apostle Emmanuel Iren"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[350px] mx-auto aspect-[350/81] relative rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src="/assets/podcast-futur.png"
                alt="The Futur - The Futur with Chris Do"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Desktop View (Headphones with Superimposed Podcasts) */}
        <section className="hidden lg:grid grid-cols-12 gap-8 md:gap-12 items-center pt-16 md:pt-24">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h2 className="text-[32px] sm:text-[40px] md:text-[45px] font-normal text-black leading-tight">
              Conversations That Inspire My Work
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-[#676767] leading-relaxed">
              Whether I&apos;m commuting, working out, or taking a break, these podcasts challenge my assumptions, spark new ideas, and inspire me to think differently about products and people.
            </p>
          </div>

          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px]">
            <div className="w-[380px] sm:w-[480px] md:w-[540px] aspect-square relative select-none opacity-80">
              <Image
                src="/assets/headphones.svg"
                alt="Headphones background"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-[560px] aspect-[670/219] relative drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <Image
                  src="/assets/me-podcasts.png"
                  alt="Featured podcasts: Jim Rohn, Mentality with Ebuka, Celebration Church, The Futur"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Books / The Books that Fuels My Thinking */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center pt-12 md:pt-32">
          {/* Text */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-5">
            <h2 className="text-[24px] sm:text-[36px] md:text-[45px] font-medium md:font-normal text-black leading-tight">
              The Books that Fuels My Thinking
            </h2>
            <p className="text-[17px] sm:text-[18px] md:text-[20px] font-normal text-[#676767] leading-[32px] md:leading-relaxed">
              Some of my best design lessons didn&apos;t come from a design tool—they came from books. These are the titles that have influenced how I approach creativity, decision-making, and product thinking.
            </p>
          </div>

          {/* Bookshelf Visual */}
          <div className="lg:col-span-7 flex justify-center items-center pt-2 md:pt-0">
            <div className="w-full max-w-[325px] sm:max-w-[480px] md:max-w-[540px] aspect-square relative">
              <Image
                src="/assets/me-bookshelf.png"
                alt="Bookshelf with Atomic Habits, Don't Make Me Think, The Design of Everyday Things, Rich Dad Poor Dad"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Quote & Portrait */}
        <section className="flex flex-col items-center pt-14 md:pt-36">
          {/* Script Quote */}
          <div className="relative flex flex-col items-center justify-center text-center px-4 max-w-[650px] mb-6 md:mb-8 select-none">
            <p className="font-script text-[36px] sm:text-[48px] md:text-[58px] text-black leading-[1.2]">
              “Direction matters more than speed”
            </p>
            <p className="font-script text-[28px] sm:text-[34px] md:text-[42px] text-black/90 mt-1 md:mt-2">
              - Damilola Owolabi
            </p>
          </div>

          {/* Cutout Portrait standing above footer */}
          <div className="w-full max-w-[276px] sm:max-w-[380px] md:max-w-[460px] aspect-[464/544] relative select-none">
            <Image
              src="/assets/me-portrait.png"
              alt="Damilola Owolabi"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
