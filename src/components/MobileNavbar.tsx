"use client";
import React, { useState, useEffect } from "react";
import { scrollToElement } from "@/utilis/functions";
import { NAV_ITEMS } from "@/utilis/constant";
import { Button } from "./ui/button";

interface MobileMenuProps {
  visible?: boolean;
  closeMenu: () => void;
}

const MobileNavbar = ({ visible, closeMenu }: MobileMenuProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (visible) {
      console.log("outside");
      document.body.style.overflow = "hidden";
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10); // Start animation after render
    } else {
      document.body.style.overflow = "";
      setIsAnimating(false);
      console.log("insside");
      setTimeout(() => setShouldRender(false), 500); // Matches animation duration
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 top-[8%] z-50 flex justify-center items-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu Container */}
      <div
        className={`bg-white border border-primary backdrop-blur-[80px] flex flex-col justify-between p-5 w-[90%]  h-[80%] rounded-2xl shadow-lg transform transition-transform duration-500 ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 items-center mb-5 mt-6">
          {NAV_ITEMS.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.id}`}
              className="text-[16px] font-medium cursor-pointer"
              onClick={(e) => {
                closeMenu();
                scrollToElement(e, menu.id);
              }}
            >
              {menu.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <Button variant="outline" className="w-full mt-4">
            Request a Demo
          </Button>
          <Button variant="filled" className="w-full">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
