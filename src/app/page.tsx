import AboutUs from "@/components/AboutUs";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MakesTulipDifferent from "@/components/MakesTulipDifferent";
import Navbar from "@/components/Navbar";
import OurValues from "@/components/OurValues";
import WhyItWorks from "@/components/ui/WhyItWorks";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <div className="absolute top-[-200px]   left-[20%] lg:left-[-153px] w-[922px] h-[922px] rounded-[461px] bg-linear-(--circle-gradient) opacity-[0.06] -translate-x-[90%] lg:translate-x-0" />
        <div className="absolute top-[58%] left-[75%] translate-y-[-60%] w-[922px] h-[922px] rounded-full bg-linear-(--circle-gradient-red) opacity-[0.06] z-[-10] " />

        <HeroSection />
        <CapabilitiesSection />
      </div>
      <MakesTulipDifferent />
      <HowItWorks />
      <WhyItWorks />
      <AboutUs />
      <OurValues />
      {/* cirlce */}
      <div className="relative overflow-hidden">
        <div className="absolute top-[75%] -left-[48%] translate-y-[-60%] w-[922px] h-[922px] rounded-full bg-linear-(--circle-gradient-red) opacity-[0.07] z-[-10]  2xl:top-[75%] 2xl:-left-[38%]" />

        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
