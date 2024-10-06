import Navbar from "@/components/site/shared/navbar/navbar";
import HeroSection from "@/components/site/landing";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center overflow-hidden relative">
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <Navbar />
      <div className="flex flex-col flex-grow max-md:w-full max-md:px-4 md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px] pt-24 relative z-10">
        <HeroSection />
      </div>
    </div>
  );
}
