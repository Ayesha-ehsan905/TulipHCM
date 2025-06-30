import { SVGProps } from "react";

const LeftArrow: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.46311 12.4143C0.54421 12.7984 -0.347272 11.8171 0.135773 10.9532L2.57299 6.59388L0.937427 1.88179C0.613357 0.947949 1.66344 0.134843 2.50091 0.671073L11.5201 6.4465C12.228 6.89974 12.135 7.95226 11.3584 8.277L1.46311 12.4143Z"
        fill="#F07167"
      />
    </svg>
  );
};
export default LeftArrow;
