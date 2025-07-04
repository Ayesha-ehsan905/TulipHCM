import Image from "next/image";
import Container from "./Container";
import { CircleIcon, LeftArrowIcon, UnderlineIcon } from "./icons";
import { Button } from "./ui/button";
import AccentMark from "./icons/AccentMark";

const HeroSection = () => {
  const features = [
    "Uses AI to support — not replace — human intelligence",
    "Built for fast-moving companies that need smarter hiring",
    "Designed to reduce friction and elevate decision-making",
  ];

  return (
    <Container>
      <section className="mt-45 flex flex-col xl:flex-row  justify-evenly items-center ">
        {/* content section */}
        <div className="flex flex-col   items-start w-full  md:max-w-[630px]  px-5 lg:px-0 xl:ms-[170px] xl:me-0 gap-4  2xl:ms-[120px]">
          <p className="text-[32px] md:text-[56px] leading-[1.2]">
            Hiring should be{" "}
            <span className="relative inline-block">
              <AccentMark className=" absolute -top-4 md:-top-2 left-[80%] " />
              <span className="font-semibold">Fast, </span>
            </span>
            <span className="relative inline-block">
              <CircleIcon className="hidden md:block absolute -top-2 left-[-10%] " />
              <span className=" font-semibold">Clear </span>
            </span>
            &nbsp;
            <span className=" font-semibold leading-[67.2px]">&amp;</span>{" "}
            <span className="relative inline-block">
              <UnderlineIcon className=" absolute  top-[75%] left-[25%] md:left-[55%] " />
              <span className=" font-semibold">Customizable.</span>
            </span>
          </p>
          <p className=" font-nunito font-semibold text-base leading-[1.2]">
            Tulip is a next-generation applicant tracking system that combines
            the power of AI with the judgment of experienced teams. Built for
            speed and designed with empathy, Tulip helps you hire better,
            without over engineering the process.
          </p>
          <div className="flex flex-col items-start gap-3 w-full mt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <LeftArrowIcon />
                <p className="flex-1 [font-family:'Nunito',Helvetica] font-semibold text-[#292729] text-base leading-[19.2px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 relative mt-2">
            <Button variant={"filled"} className="px-4 py-2 ">
              Get Early Access
            </Button>

            <Button variant="blueFilled">Join Waitlist</Button>
          </div>
        </div>
        {/* right image */}
        <div className="w-full h-full max-w-[600px] max-h-[500px] px-5 md:px-0">
          <Image
            src="/images/HeroSection.png"
            alt="hero section image"
            width={512}
            height={512}
            className="w-full h-full object-contain  md:mt-[-57px]"
          />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
