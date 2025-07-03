"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import { NAV_ITEMS } from "@/utilis/constant";
import { Button } from "./ui/button";
import clsx from "clsx"; // Optional utility for class merging
import { scrollToElement } from "@/utilis/functions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute top-[-200px] left-[-153px] w-[922px] h-[922px] rounded-[461px] bg-linear-(--circle-gradient) opacity-[0.06]" />
      </div>
      <div
        className={clsx(
          "fixed w-full top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex flex-row justify-between mx-20 my-5 ">
            <div className="w-[145px] h-[50px]">
              <Image
                src="/images/Logo.png"
                alt="Company logo"
                width={144}
                height={50}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-row gap-12 items-center">
              {NAV_ITEMS.map((item, index) => (
                <span
                  key={index}
                  className="text-[16px] font-medium cursor-pointer"
                  onClick={(e) => scrollToElement(e, item.id)}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button variant="outline" className="px-4 py-3">
                Request a Demo
              </Button>
              <Button variant="filled" className="px-4 py-3">
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
