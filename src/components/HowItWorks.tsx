import React from "react";
import Container from "./Container";
import { DecisionAccentIcon } from "./icons";
import { STEPS } from "@/utilis/constant";

const HowItWorks = () => {
  return (
    <>
      <Container>
        <section
          className="flex flex-col w-full max-w-6xl items-center gap-4 mx-auto mt-[181px]"
          id="Work"
        >
          {/* heading    */}

          <div className=" border text-base  bg-light-purple text-purple border-purple rounded-[80px] px-4 py-2 font-medium">
            How It Works
          </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <h1 className="text-[40px] font-medium  text-center font-esbuild ">
              From Job Req To Offer,{" "}
              <span className="relative inline-block">
                <DecisionAccentIcon className="absolute  top-[76%] left-[7%] " />
                <span className="font-semibold">Without</span>
              </span>{" "}
              The <span className="font-semibold">Chaos.</span>
            </h1>
          </div>
          {/* Steps */}

          <div className="flex items-center justify-center gap-6 w-full  mx-auto mt-16">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="flex-1 bg-transparent border-none shadow-none w-[152px]"
              >
                <div className="flex items-center gap-7 p-0">
                  <span>{<step.icon />}</span>
                  <div className="flex flex-col items-start gap-4 wrap">
                    <h3 className=" font-semibold  text-xl leading-[120%]">
                      {step.title}
                    </h3>
                    <p className=" font-nunito font-semibold text-[#29282a] text-base leading-[120%]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default HowItWorks;
