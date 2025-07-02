import Image from "next/image";
import React from "react";
import { DifferentAccentMarkIcon } from "./icons";

const MakesTulipDifferent = () => {
  return (
    <>
      {/* image as background  keeping ,if needed */}
      {/* <section className=" mt-50 mb-47    ">
        <div className=" h-[800px]  bg-[url('/images/tulip-curve-bg.png')] bg-no-repeat bg-top bg-contain w-full ">
          <div className=" z-10 flex items-center justify-evenly ps-44 pe-24 gap-15  ">
            <div className="flex flex-col items-start justify-center gap-4  max-w-[530px] mt-[90px]">
              <p className="text-[40px] font-medium leading-[120%] text-white ">
                What Makes Tulip{" "}
                <span className="relative inline-block">
                  <DifferentAccentMarkIcon className="absolute  top-[75%] left-[27%] " />
                  <span className=" font-semibold">Different</span>
                </span>
              </p>
              <p className="font-nunito font-semibold text-base leading-[1.2] text-white  text-center">
                Tulip blends AI and human intelligence to streamline the hiring
                process, without sacrificing clarity or control. From job
                creation to final offer, we help teams move faster, make better
                decisions, and stay aligned along the way.
              </p>
            </div>
            <div className="w-full h-full max-w-[750px] max-h-[750px] mt-[90px]">
              <Image
                src="/images/tulip-different.png"
                alt="hero section image"
                width={512}
                height={12}
                className="w-full h-full object-contain  "
              />
            </div>
          </div>
        </div>
      </section> */}
      <div className="relative w-full overflow-hidden mt-50 mb-47 ">
        {/* Pink background curve image */}
        <div className="w-[100vw] h-[90vh]">
          <Image
            src="/images/tulip-curve-bg.png"
            alt="Pink Curve Background"
            width={1448}
            height={600}
            className="w-[100vw] h-[90vh] "
            priority
          />
        </div>
        {/* Content on top */}
        <div className="absolute inset-0 z-10 flex items-center justify-evenly ps-44 pe-24 gap-15">
          <div className="flex flex-col items-start justify-center gap-4  max-w-[530px]">
            <p className="text-[40px] font-medium leading-[120%] text-white ">
              What Makes Tulip{" "}
              <span className="relative inline-block">
                <DifferentAccentMarkIcon className="absolute  top-[75%] left-[27%] " />
                <span className=" font-semibold">Different</span>
              </span>
            </p>
            <p className="font-nunito font-semibold text-base leading-[1.2] text-white  text-center">
              Tulip blends AI and human intelligence to streamline the hiring
              process, without sacrificing clarity or control. From job creation
              to final offer, we help teams move faster, make better decisions,
              and stay aligned along the way.
            </p>
          </div>

          {/* Right side: image */}

          <div className="w-full h-full max-w-[650px] max-h-[650px] mt-[40px]">
            <Image
              src="/images/tulip-different.png"
              alt="hero section image"
              width={590}
              height={464}
              className="w-full h-full object-contain  mt-[-57px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MakesTulipDifferent;
