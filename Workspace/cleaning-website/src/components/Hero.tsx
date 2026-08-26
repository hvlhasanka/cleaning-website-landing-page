import { FiArrowRight } from "react-icons/fi";
import Eyebrow from "./Eyebrow";

const STATS = [
  { value: "12,400+", label: "Homes cleaned" },
  { value: "4.9★", label: "Average rating" },
  { value: "18", label: "Cities served" },
];

function Hero() {
  return (
    <section
      id="home"
      className="bg-[radial-gradient(94.03%_187.1%_at_85%_20%,rgba(31,158,130,0.14)_0%,rgba(0,0,0,0)_55%),linear-gradient(180deg,#FCFBF8_0%,#EAF4F2_100%)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <Eyebrow>Residential &amp; Commercial · Coast to Coast</Eyebrow>

          <h1 className="mt-3.5 font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-navy sm:text-[52px] lg:text-[60px]">
            Spotless spaces,{" "}
            <span className="text-teal">every single time</span> — across
            country.
          </h1>

          <p className="mt-[22px] max-w-[480px] text-[17px] leading-[29px] text-[#5C7078] sm:text-[18px]">
            Fully insured, safety-trained cleaning teams using eco-friendly
            products. Book in under two minutes and get your first clean
            guaranteed.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="flex h-[55px] items-center gap-2 rounded-full bg-orange px-7 text-[15px] font-semibold leading-6 text-white shadow-cta transition-colors hover:bg-orange-dark"
            >
              Book Your Cleaning
              <FiArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#before-after"
              className="flex h-[55px] items-center gap-2 rounded-full border-[1.5px] border-navy px-7 text-[15px] font-semibold leading-6 text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              See Before &amp; After
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-y-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-hairline pl-5 pr-8 sm:pr-10"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[26px] font-bold leading-[42px] text-navy">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-[21px] text-[#5C7078]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column - Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy/15">
            <img
              src="https://res.cloudinary.com/jvhaorsn/image/upload/v1787775929/hero-image_d3recw.png"
              alt="Cleaner in blue gloves wiping down a kitchen counter with a spray bottle"
              className="aspect-[4/3] w-full object-cover lg:aspect-square"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,30,42,0)_40%,rgba(12,30,42,0.55)_100%)]"
              aria-hidden="true"
            />
          </div>
          <div className="absolute bottom-6 left-6 flex w-fit max-w-[calc(100%-3rem)] flex-wrap items-center gap-x-2.5 gap-y-1 rounded-2xl bg-white px-[18px] py-3.5 shadow-[0px_12px_30px_rgba(0,0,0,0.18)]">
            <span className="font-display text-[15px] font-bold leading-6 text-navy">
              100% Satisfaction
            </span>
            <span className="text-[12px] leading-[19px] text-[#5C7078]">
              Guaranteed or it&apos;s free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
