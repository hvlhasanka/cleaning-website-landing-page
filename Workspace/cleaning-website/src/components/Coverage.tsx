import { FiArrowRight } from "react-icons/fi";
import Eyebrow from "./Eyebrow";

const STATS = [
  { value: "9", label: "Cities live" },
  { value: "6", label: "Provinces" },
  { value: "2014", label: "Founded" },
];

const CITIES = [
  { name: "Toronto", state: "ON" },
  { name: "Vancouver", state: "BC" },
  { name: "Montreal", state: "QC" },
  { name: "Calgary", state: "AB" },
  { name: "Ottawa", state: "ON" },
  { name: "Edmonton", state: "AB" },
  { name: "Winnipeg", state: "MB" },
  { name: "Halifax", state: "NS" },
  { name: "Victoria", state: "BC" },
];

function Coverage() {
  return (
    <section
      id="coverage"
      className="bg-navy px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto max-w-[1235px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-[30px]">
          <div>
            <Eyebrow>Coverage</Eyebrow>

            <h2 className="mt-3.5 font-display text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:text-[40px] sm:leading-[64px]">
              Coast to coast, city by city
            </h2>

            <p className="mt-3.5 max-w-[600px] text-[16px] leading-[26px] text-[#B9CBD1] sm:text-[16.5px]">
              Proudly cleaning homes and businesses in 9 cities — and growing.
            </p>
          </div>

          <dl className="flex shrink-0 gap-9">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-right">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[32px] font-extrabold leading-[51px] text-[#5FC7AE]">
                    {stat.value}
                  </span>
                  <span className="mt-[3px] block text-[12.5px] leading-5 text-[#8FA6AD]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-9">
          {CITIES.map((city) => (
            <li
              key={city.name}
              className="flex items-center gap-3 lg:flex-col lg:gap-0 lg:text-center"
            >
              <span
                className="size-[14px] shrink-0 rounded-full border-[3px] border-navy bg-[#1F9E82] lg:mb-3.5"
                aria-hidden="true"
              />
              <span className="text-[14px] font-bold leading-[22px] text-white">
                {city.name}
              </span>
              <span className="text-[11.5px] leading-[18px] text-[#8FA6AD] lg:mt-0.5">
                {city.state}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-[30px] flex flex-col gap-6 border-t border-white/[0.12] pt-[26px] sm:flex-row sm:items-center sm:gap-3.5">
          <a
            href="#quote"
            className="flex h-[52px] w-fit shrink-0 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold leading-6 text-navy transition-colors hover:bg-[#EAF4F2]"
          >
            Check my city
            <FiArrowRight className="size-4" aria-hidden="true" />
          </a>

          <p className="max-w-[520px] text-[13.5px] leading-[22px] text-[#B9CBD1]">
            Don't see your city listed? We're expanding fast — reach out and
            we'll let you know when we launch near you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Coverage;
