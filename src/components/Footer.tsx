import React from "react";
import Container from "./Container";
import Image from "next/image";
import { LinkedInIcon, TwitterIcon } from "./icons";

const Footer = () => {
  // Social media icons data

  return (
    <Container>
      <footer className="flex flex-col w-full items-center gap-4 px-5 mt-16 mb-6 md:px-20">
        <div className="relative w-full flex items-center justify-between h-8 ">
          {/* Logo section */}
          <div className="flex items-center h-8">
            <div className="w-[100px] h-[32px]">
              <Image
                src="/images/footer-logo.png"
                alt="Company logo"
                width={100}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Social media icons */}
          <div className=" items-center gap-4 soical-icons ">
            <span>
              <LinkedInIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
          </div>

          {/* Contact email */}
          <div className="font-nunito font-semibold text-base leading-[120%]">
            hello@tulip.com
          </div>
        </div>

        {/* Divider */}
        <div className=" border-[#E5E5E5] border-2 w-full " />

        {/* Copyright section */}
        <div className="flex items-start justify-between w-full">
          <div className="font-nunito font-semibold text-[#808080] text-xs  ">
            TulipATS Powered By HCM Strategy 2025
          </div>

          <div className="font-nunito font-semibold text-[#808080] text-xs  ">
            All Rights Reserved
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
