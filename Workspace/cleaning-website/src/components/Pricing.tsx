import { FiCheck } from "react-icons/fi";
import Eyebrow from "./Eyebrow";

const PLANS = [
  {
    name: "Standard",
    price: "40",
    description: "Ideal for regular upkeep, up to 1,500 sq ft.",
    features: ["Kitchen & bathrooms", "Dusting & vacuuming", "Trash removal"],
    cta: "Book Standard",
    highlight: false,
  },
  {
    name: "Deep Clean",
    price: "85",
    description: "Full detail clean, top to bottom.",
    features: [
      "Everything in Standard",
      "Inside oven & fridge",
      "Baseboards & window sills",
    ],
    cta: "Book Deep Clean",
    highlight: true,
  },
  {
    name: "Move-Out",
    price: "110",
    description: "Get your deposit back, guaranteed clean.",
    features: [
      "Everything in Deep Clean",
      "Cabinet interiors",
      "Landlord checklist included",
    ],
    cta: "Book Move-Out",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#FCFBF7] px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto max-w-[1235px]">
        <Eyebrow>Pricing</Eyebrow>

        <h2 className="mt-3.5 max-w-[600px] font-display text-[32px] font-extrabold leading-[1.3] tracking-[-0.02em] text-navy sm:text-[40px] sm:leading-[64px]">
          Simple, transparent packages
        </h2>

        <p className="mt-3.5 max-w-[600px] text-[16px] leading-[26px] text-[#5C7078] sm:text-[16.5px]">
          Final quotes depend on square footage and condition — request a
          custom quote anytime.
        </p>

        <ul className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={
                plan.highlight
                  ? "flex flex-col rounded-[20px] bg-navy px-7 py-[34px]"
                  : "flex flex-col rounded-[20px] border border-hairline bg-white px-7 py-[34px]"
              }
            >
              <p
                className="text-[13px] font-semibold uppercase leading-[21px] tracking-[1.04px]"
                style={{ color: "#1F9E82" }}
              >
                {plan.name}
              </p>

              <p className="mt-3.5 flex items-baseline gap-1">
                <span
                  className={
                    "font-display text-[38px] font-extrabold leading-[61px] tracking-[-0.02em] " +
                    (plan.highlight ? "text-white" : "text-navy")
                  }
                >
                  ${plan.price}
                </span>
                <span
                  className={
                    "text-[15px] font-semibold " +
                    (plan.highlight ? "text-[#B9CBD1]" : "text-[#5C7078]")
                  }
                >
                  /visit
                </span>
              </p>

              <p
                className={
                  "mt-1.5 text-[13px] leading-[21px] " +
                  (plan.highlight ? "text-[#B9CBD1]" : "text-[#5C7078]")
                }
              >
                {plan.description}
              </p>

              <ul className="mt-[22px] flex flex-col">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      "flex items-center gap-2 py-[7px] text-[14px] leading-[22px] " +
                      (plan.highlight ? "text-[#EAF4F2]" : "text-navy")
                    }
                  >
                    <FiCheck
                      className={
                        "size-4 shrink-0 " +
                        (plan.highlight ? "text-[#5FC7AE]" : "text-[#1F9E82]")
                      }
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={
                  "mt-4 flex h-[52px] w-fit items-center justify-center rounded-full px-7 text-[15px] font-semibold leading-6 transition-colors " +
                  (plan.highlight
                    ? "bg-white text-navy hover:bg-[#EAF4F2]"
                    : "border-[1.5px] border-navy text-navy hover:bg-navy hover:text-white")
                }
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pricing;
