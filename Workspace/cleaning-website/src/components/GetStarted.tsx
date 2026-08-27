import { FiArrowRight } from "react-icons/fi";
import Eyebrow from "./Eyebrow";

const STEPS = [
  "We review your space details and match you with the right team.",
  "You get a fixed quote by phone or email within one business day.",
  "Confirm your date — we show up on time, every time.",
];

const inputClasses =
  "h-[43px] w-full rounded-[10px] border-[1.5px] border-hairline bg-[#FCFBF8] px-3.5 text-[14px] leading-[17px] text-navy placeholder:text-[#757575] focus:border-teal focus:outline-none";

const labelClasses = "block pb-1.5 text-[12.5px] font-semibold leading-5 text-[#5C7078]";

function GetStarted() {
  return (
    <section
      id="quote"
      className="bg-[linear-gradient(160deg,#132A3A_8.49%,#0C1E2A_91.51%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto max-w-[1235px]">
        <Eyebrow>Get Started</Eyebrow>

        <h2 className="mt-3.5 font-display text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:text-[40px] sm:leading-[64px]">
          Request your free quote
        </h2>

        <p className="mt-3.5 max-w-[600px] text-[16px] leading-[26px] text-[#B9CBD1] sm:text-[16.5px]">
          Tell us a bit about your space and we&apos;ll get back to you
          within one business day.
        </p>

        <div className="mt-14 flex flex-col overflow-hidden rounded-[24px] shadow-[0px_30px_60px_rgba(0,0,0,0.25)] lg:flex-row">
          {/* Left column */}
          <div className="flex flex-col justify-between bg-[#1F9E82] px-9 py-11 lg:w-[43.4%]">
            <div>
              <h3 className="font-display text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
                Here&apos;s what happens after you hit submit
              </h3>

              <ol className="mt-7 flex flex-col">
                {STEPS.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3.5 border-t border-white/25 py-3.5 first:border-t-0 first:pt-0"
                  >
                    <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-white/[0.22] font-display text-[14px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <p className="text-[13.5px] leading-5 text-white">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <blockquote className="mt-8 border-l-2 border-white/50 pl-3.5 text-[13.5px] italic leading-[22px] text-white/90">
              &quot;Quoted, confirmed, and cleaned within 48 hours.&quot; —
              most Country Cleaning Service clients
            </blockquote>
          </div>

          {/* Right column - form */}
          <form className="flex flex-1 flex-col gap-6 bg-white px-10 py-11">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Lucas Davey"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(+1) 999-555-5555"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cityState" className={labelClasses}>
                  City / State
                </label>
                <input
                  id="cityState"
                  name="cityState"
                  type="text"
                  placeholder="Toronto, ON"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className={labelClasses}>
                  Service Needed
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="squareFootage" className={labelClasses}>
                  Approx. Square Footage
                </label>
                <input
                  id="squareFootage"
                  name="squareFootage"
                  type="text"
                  placeholder="e.g. 1,200 sq ft"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="preferredDate" className={labelClasses}>
                Preferred Date
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className={inputClasses}
              />
            </div>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="flex h-[45px] w-fit items-center gap-2 rounded-full bg-orange px-7 text-[15px] font-bold leading-[17px] text-white shadow-cta transition-colors hover:bg-orange-dark"
              >
                Request Free Quote
                <FiArrowRight className="size-4" aria-hidden="true" />
              </button>

              <p className="text-[12px] leading-[19px] text-[#5C7078]">
                No payment required — quotes are always free.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
