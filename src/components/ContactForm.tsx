import Container from "./Container";
import Textfeild from "./ui/Textfeild";

export default function ContactForm() {
  return (
    <Container>
      <section className="  flex flex-row items-center justify-center  w-full max-w-4xl mx-auto mt-55">
        <div className="bg-light-red rounded-3xl   w-full ">
          <div className="grid md:grid-cols-2 gap-8 p-6 items-start">
            {/* Left side - Text content */}
            <div className="flex flex-col gap-4 basis-1/2">
              <h1 className=" text-white text-[32px] font-medium leading-[120%]">
                We&apos;re building something different. Want in?
              </h1>

              <p className="text-white font-nunito text-base leading-[120%]">
                Tulip is currently building a small group of forward-thinking
                teams. If you&apos;re ready to rethink hiring — with speed,
                clarity, and humanity — we&apos;d love to hear from you.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="flex flex-col gap-2 basis-1/2">
              {/* Name and Email row */}
              <div className="grid grid-cols-2 gap-2">
                <Textfeild label="Name" />
                <Textfeild label="Email" type="email" />
              </div>

              {/* Role and Company row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full">
                  <select
                    name="role"
                    required
                    defaultValue=""
                    className=" pointer-events-none w-full px-3 py-2 rounded-[80px]  focus-visible:outline-none bg-white appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    {/* Placeholder option: use span-like style with all black + red * */}
                    <option value="" disabled hidden></option>
                    <option value="hr-manager">HR Manager</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="founder">Founder</option>
                    <option value="ceo">CEO</option>
                    <option value="other">Other</option>
                  </select>

                  {/* Simulated styled placeholder */}
                  <span className="absolute left-4 top-2.5 text-base pointer-events-none">
                    Role<span className="text-error">*</span>
                  </span>
                </div>

                <Textfeild label="Company" />
              </div>

              {/* Message textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none placeholder-[#29282A] resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-3 w-full bg-btn text-white  text-base font-medium py-3  rounded-[40px] "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
