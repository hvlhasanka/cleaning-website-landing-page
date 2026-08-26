import Eyebrow from "./Eyebrow";

const PLEDGES = [
  {
    icon: "🛡️",
    title: "Fully insured & bonded",
    tag: "Coverage",
    description:
      "Every technician and every job is covered — accidents are rare, but if something happens, you're protected, no exceptions.",
  },
  {
    icon: "🎓",
    title: "Safety-trained staff",
    tag: "Training",
    description:
      "Every cleaner completes chemical handling & safety training before stepping into your home or office.",
  },
  {
    icon: "🌿",
    title: "Eco-friendly by default",
    tag: "Products",
    description:
      "Plant-based, low-VOC products used on every job — safe around kids, pets, and anyone with sensitivities.",
  },
  {
    icon: "✅",
    title: "Satisfaction, guaranteed",
    tag: "Guarantee",
    description:
      "Not happy with a spot we missed? Tell us within 24 hours and we'll send a team back — free of charge.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#FCFBF8] px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto grid max-w-[1235px] items-start gap-12 lg:grid-cols-[499fr_676fr] lg:gap-[60px]">
        {/* Pledge card */}
        <div className="rounded-[22px] bg-navy px-8 py-[38px]">
          <Eyebrow tone="onDark">About us · The pledge</Eyebrow>

          <h2 className="mt-3.5 font-display text-[28px] font-extrabold leading-[1.16] tracking-[-0.02em] text-white sm:text-[32px] sm:leading-[37px]">
            What we promise, we put in writing.
          </h2>

          <p className="mt-4 text-[14.5px] leading-[23px] text-[#B9CBD1]">
            Founded in 2014, Country Cleaning Service has grown from a
            two-person team in Toronto into a nationwide network of insured,
            trained cleaners. No fine print, no upsells at the door — if any
            promise below isn't met, we make it right at no cost to you.
          </p>

          <p className="mt-7 flex flex-wrap items-baseline gap-x-0.5 border-t border-white/[0.14] pt-[21px]">
            <span className="font-display text-[30px] font-bold leading-[48px] text-[#5FC7AE]">
              24hrs
            </span>
            <span className="text-[13px] leading-[21px] text-[#B9CBD1]">
              Free reclean window if you're not satisfied
            </span>
          </p>
        </div>

        {/* Pledge checklist */}
        <ul>
          {PLEDGES.map((pledge, index) => (
            <li
              key={pledge.title}
              className={`flex gap-[30px] pb-[27px] pt-[26px] ${
                index === 0 ? "lg:pt-0" : ""
              } ${index < PLEDGES.length - 1 ? "border-b border-hairline" : ""}`}
            >
              <span
                className="flex size-[56px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF4F2] text-[24px] leading-[38px]"
                aria-hidden="true"
              >
                {pledge.icon}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-[18px] font-bold leading-[29px] tracking-[-0.02em] text-navy">
                    {pledge.title}
                  </h3>
                  <span className="rounded-full bg-[#EAF4F2] px-2.5 py-1 text-[11px] font-bold uppercase leading-[18px] tracking-[0.66px] text-[#1F9E82]">
                    {pledge.tag}
                  </span>
                </div>

                <p className="mt-1.5 max-w-[440px] text-[14.5px] leading-[23px] text-[#5C7078]">
                  {pledge.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
