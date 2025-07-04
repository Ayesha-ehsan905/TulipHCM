"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import { NAV_ITEMS } from "@/utilis/constant";
import { Button } from "./ui/button";
import clsx from "clsx";
import { scrollToElement } from "@/utilis/functions";
import { CloseMenuIcon, OpenMenuIcon } from "./icons";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="w-[130px] h-[40px] sm:w-[145px] sm:h-[50px]">
            <Image
              src="/images/Logo.png"
              alt="Company logo"
              width={144}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-12">
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

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="outline" className="px-4 py-3">
              Request a Demo
            </Button>
            <Button variant="filled" className="px-4 py-3">
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <MobileNavbar
          visible={isMobileMenuOpen}
          closeMenu={() => {
            document.body.style.overflow = "";
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
