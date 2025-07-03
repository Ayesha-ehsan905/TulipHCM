import { SVGProps } from "react";

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_337_45)">
        <path
          d="M4 6H20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 18H20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_337_45">
          <rect width="24" height="24" fill="black" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MenuIcon;
