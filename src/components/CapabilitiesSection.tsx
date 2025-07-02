import React from "react";
import Container from "./Container";
import { DecisionUnderlineIcon, PeopleAccentMarkIcon } from "./icons";
import { CAPABILITIES_FEATURES } from "@/utilis/constant";

const CapabilitiesSection = () => {
  return (
    <>
      <Container>
        {/* capabilities section text */}
        <section className="flex flex-col w-full max-w-[846px] items-center gap-4 mx-auto mt-[273px]">
          <div className=" border text-base  bg-light-orange text-orange border-orange rounded-[80px] px-4 py-2 font-normal">
            Key Capabilities
          </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <h1 className="text-[40px] font-medium  text-center font-esbuild ">
              An ATS That <span className="font-semibold">Supports</span> How{" "}
              <span className="relative inline-block">
                <PeopleAccentMarkIcon className="absolute  top-0 left-[75%] " />
                <span className="font-semibold">People</span>
              </span>{" "}
              Actually Make{" "}
              <span className="relative inline-block">
                <DecisionUnderlineIcon className="absolute  top-[66%] left-[23%] " />
                <span className="font-semibold">Decisions.</span>{" "}
              </span>
            </h1>
            <p className="text-[16px] text-center font-nunito font-semibold">
              Tulip blends AI and human intelligence to streamline the hiring
              process, without sacrificing clarity or control. From job creation
              to final offer, we help teams move faster, make better decisions,
              and stay aligned along the way.
            </p>
          </div>
        </section>
        {/* grid */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES_FEATURES.map((feature, index) => (
              <div
                key={`top-feature-${index}`}
                className={`flex flex-col items-start gap-6 p-5 rounded-2xl overflow-hidden relative flex-1 ${feature.bgClass}`}
              >
                {/* Glow effect */}
                {feature.glowColor && (
                  <div
                    className={`absolute w-[186px] h-[186px] top-[-93px] left-[251px] ${feature.glowColor} rounded-[93px] blur-[200px] opacity-80`}
                  />
                )}
                <span>{<feature.icon />}</span>{" "}
                <div className="flex flex-col justify-between h-full max-w-[340px]">
                  <h3 className="z-10 font-semibold text-xl mt-6 ">
                    {feature.title}
                  </h3>
                  <p className=" z-10 text-base font-nunito pb-5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CapabilitiesSection;
