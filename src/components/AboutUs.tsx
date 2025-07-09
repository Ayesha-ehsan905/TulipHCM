import Image from "next/image";
import React from "react";
import { CrownIcon, QuotationIcon, WishedUnderlineIcon } from "./icons";

const AboutUs = () => {
  return (
    <div className="relative w-full overflow-hidden mt-40  " id="About">
      {/* Pink background curve image */}
      <div className="w-[100vw] h-[110vh]  bg-primary lg:bg-transparent">
        <Image
          src="/images/About-us.png"
          alt="Pink Curve Background"
          width={1448}
          height={600}
          className="w-[100vw] h-[110vh] hidden lg:block"
          priority
        />
      </div>
      {/* Content on top */}
      <div className="absolute inset-0 z-10 flex flex-col items-center mt-15 px-5 lg:px-0 lg:mt-35 ">
        <div className="flex flex-col justify-center items-center gap-12   ">
          <div className=" text-center  border text-base  bg-light-gray-transparent text-light-gray border-light-gray-transparent rounded-[80px] px-8 py-2 font-normal">
            About Us{" "}
          </div>
          <p className="text-white text-[32px] lg:text-[40px] font-medium leading-[120%] text-center">
            We Built The{" "}
            <span className="relative inline-block">
              <CrownIcon className="absolute  -top-[20%] left-[75%] " />
              <span>System</span>
            </span>{" "}
            We Always <br />
            <span className="relative inline-block">
              <WishedUnderlineIcon className="absolute  top-[75%] left-[6%] " />
              <span>Wished</span>
            </span>{" "}
            We Had.
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center mt-12 lg:flex-row">
          <div className="flex flex-col items-start justify-center gap-4  max-w-[530px]">
            <p className="text-[32px] font-medium leading-[120%] text-white lg:text-[40px] ">
              Our{" "}
              <span className="relative inline-block">
                <QuotationIcon className="absolute  -top-[18%] left-[88%] " />
                <span>Story</span>
              </span>
            </p>
            <p className="font-nunito font-semibold text-base leading-[120%] text-white  text-start">
              After leading HR and product teams in high-growth companies, we
              saw the same problems over and over: messy processes, siloed
              communication, and tools that created more noise than clarity.
              Tulip was born out of the belief that hiring is both a science and
              an art, and that technology should support human judgment, not
              replace it. We&apos;re building the platform we always wanted: one
              that&apos;s simple, powerful, and designed to make great hiring
              easier.
            </p>
          </div>

          {/* Right side: image */}

          <div className="w-full h-full lg:max-w-[650px] lg:max-h-[650px]  ">
            <Image
              src="/images/aboutus-img.png"
              alt="hero section image"
              width={900}
              height={900}
              className="pb-10 lg:pb-0 lg:max-w-[650px] lg:max-h-[650px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
