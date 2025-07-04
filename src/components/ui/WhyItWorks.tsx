import React from "react";
import Container from "../Container";
import Image from "next/image";
import { StarIcon } from "../icons";

const WhyItWorks = () => {
  return (
    <Container>
      <section className="flex flex-col justify-between w-full max-w-6xl items-center gap-4 mx-auto mt-16 px-5 lg:px-0 lg:flex-row">
        <div className=" flex flex-col gap-4 max-w-[520px]">
          <p className="font-medium text-[32px] leading-[100%] lg:text-[40px]">
            Why It{" "}
            <span className="relative inline-block">
              <StarIcon className="absolute -top-[40%] left-[100%] " />
              <span>Works </span>{" "}
            </span>
          </p>
          <p className="font-nunito font-semibold text-base leading-[120%]">
            Technology helps you move fast. Human judgment ensures you get it
            right. Tulip brings both together in one clean, powerful platform.
          </p>
        </div>
        <div className="lg:w-[428px] lg:h-[428px] ">
          <Image
            src="/images/work_img.png"
            alt="hero section image"
            width={428}
            height={428}
            className="lg:w-[428px] lg:h-[428px] object-contain  "
          />
        </div>
      </section>
    </Container>
  );
};

export default WhyItWorks;
