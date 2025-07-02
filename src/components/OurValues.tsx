import Container from "./Container";

export default function OurValues() {
  return (
    <Container>
      <section className="flex flex-col w-full max-w-5xl items-center gap-4 mx-auto mt-35">
        <p className=" border text-base  bg-light-blue text-accent-blue border-accent-blue rounded-[80px] px-4 py-2 font-normal">
          Our Values{" "}
        </p>
        <p className="font-medium text-[40px]">
          Our 5 Principles of Core Value
        </p>
      </section>
    </Container>
  );
}
