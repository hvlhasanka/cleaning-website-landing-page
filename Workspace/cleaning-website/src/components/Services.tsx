import { FiArrowRight } from "react-icons/fi";
import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    icon: "🏠",
    title: "Residential Cleaning",
    description: "Recurring or one-time home cleans tailored to your schedule.",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description: "Top-to-bottom detail clean for kitchens, bathrooms, and beyond.",
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out",
    description: "Leave your old place spotless, or start fresh in your new one.",
  },
  {
    icon: "🏢",
    title: "Commercial & Office",
    description: "Flexible after-hours cleaning contracts for offices and retail.",
  },
  {
    icon: "🧱",
    title: "Post-Construction",
    description: "Dust and debris removal to make new builds move-in ready.",
  },
  {
    icon: "🧼",
    title: "Carpet & Upholstery",
    description: "Steam cleaning that lifts stains and allergens deep in the fibres.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#FCFBF7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Eyebrow>What we do</Eyebrow>

        <h2 className="mt-3.5 max-w-[600px] font-display text-[32px] font-extrabold leading-[1.3] tracking-[-0.02em] text-navy sm:text-[40px] sm:leading-[64px]">
          Cleaning services for every space
        </h2>

        <p className="mt-3.5 max-w-[600px] text-[16px] leading-[26px] text-[#5C7078] sm:text-[16.5px]">
          From weekly home cleans to full commercial contracts, our trained
          teams handle it with insured, eco-conscious care.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-[20px] border border-hairline bg-white px-[26px] py-[30px] transition-shadow hover:shadow-lg hover:shadow-navy/5"
            >
              <span
                className="flex size-[46px] items-center justify-center rounded-xl bg-[#EAF4F2] text-[22px] leading-[35px]"
                aria-hidden="true"
              >
                {service.icon}
              </span>

              <h3 className="mt-[18px] font-display text-[18px] font-bold leading-[29px] tracking-[-0.02em] text-navy">
                {service.title}
              </h3>

              <p className="mt-2 text-[14.5px] leading-[23px] text-[#5C7078]">
                {service.description}
              </p>

              <a
                href="#quote"
                className="mt-3.5 flex items-center gap-1.5 text-[13.5px] font-semibold leading-[22px] text-[#1F9E82] transition-colors hover:text-navy"
              >
                Learn more
                <FiArrowRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> about {service.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
