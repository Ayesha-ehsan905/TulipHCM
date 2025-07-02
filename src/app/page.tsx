import CapabilitiesSection from "@/components/CapabilitiesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MakesTulipDifferent from "@/components/MakesTulipDifferent";
import Navbar from "@/components/Navbar";
import WhyItWorks from "@/components/ui/WhyItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Background Circle (Behind Hero and Capabilities) */}
        <div className="absolute top-[58%] left-[75%] translate-y-[-60%] w-[922px] h-[922px] rounded-full bg-linear-(--circle-gradient-red) opacity-[0.06] z-[-10] " />

        <HeroSection />
        <CapabilitiesSection />
      </div>
      <MakesTulipDifferent />
      <HowItWorks />
      <WhyItWorks />
    </>
  );
}
