import Image from "next/image";
import Container from "./Container";
import { NAV_ITEMS } from "@/utilis/constant";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <Container>
      <div className="relative">
        <div className="absolute top-[-230px] left-[-180px] w-[922px] h-[922px]  rounded-[461px] bg-linear-(--circle-gradient) opacity-[0.06]" />
      </div>

      <div className="flex flex-row justify-between mx-20 my-5 z-10">
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
            <span key={index} className="text-[16px]  font-medium">
              {item.label}
            </span>
          ))}
        </div>
        <div>
          <div className="flex items-center gap-6 ">
            <Button variant="outline" className=" px-4 py-3">
              Request a Demo
            </Button>
            <Button variant="filled" className=" px-4 py-3">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
