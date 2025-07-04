import { FEATURES_FIRST_ROW, FEATURES_SECOND_ROW } from "@/utilis/constant";
import Container from "./Container";
import { PrincipleUnderlineIcon } from "./icons";

export default function OurValues() {
  return (
    <Container>
      <section className="flex flex-col w-full max-w-5xl items-center gap-4 mx-auto mt-35  px-5 lg:px-0">
        <p className=" border text-base  bg-light-blue text-accent-blue border-accent-blue rounded-[80px] px-4 py-2 font-normal">
          Our Values{" "}
        </p>
        <p className="font-medium  text-[32px] lg:text-[40px]">
          Our 5{" "}
          <span className="relative inline-block">
            <PrincipleUnderlineIcon className="absolute top-[75%] left-[12%] " />
            <span className="font-semibold">Principles </span>
          </span>{" "}
          of Core Value
        </p>

        <div className="flex flex-col  gap-10 mt-16  lg:flex-row">
          {FEATURES_FIRST_ROW.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start gap-4   "
            >
              <span>{<feature.icon />}</span>
              <p className="text-xl font-semibold">{feature.title}</p>
              <p className="mt-5 text-base font-nunito">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col   mt-10 gap-10  lg:flex-row">
          {FEATURES_SECOND_ROW.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start gap-4 max-w-[512px] "
            >
              <span>{<feature.icon />}</span>
              <p className="text-xl font-semibold">{feature.title}</p>
              <p className="mt-5 text-base font-nunito">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
