import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* <div className="absolute top-[-230px] left-[-180px] w-[922px] h-[922px]  rounded-[461px] bg-linear-(--circle-gradient) opacity-[0.06]" /> */}

      <Navbar />
      <HeroSection />
    </>
  );
}
