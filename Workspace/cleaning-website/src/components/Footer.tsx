const COMPANY_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#before-after" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

const CONTACT_LINES = [
  "(+91) 999-999-9999",
  "cleaningservice.com",
  "Mon–Sat, 7am–7pm",
];

const SERVICE_AREA_ROWS = [
  ["Toronto", "Vancouver"],
  ["Montreal", "Calgary"],
  ["Ottawa", "Edmonton"],
];

const BADGES = ["Insured & Bonded", "Safety Trained"];

function Footer() {
  return (
    <footer className="bg-[#0C1E2A] px-5 pb-[30px] pt-[70px] sm:px-8 lg:px-[117.6px]">
      <div className="mx-auto max-w-[1235px]">
        <div className="grid gap-12 lg:grid-cols-[354.71px_253.37px_253.37px_253.36px] lg:justify-between">
          <div>
            <p className="font-display text-[20px] font-extrabold leading-[32px] text-white">
              Country Cleaning Service
            </p>

            <p className="mt-3.5 max-w-[280px] text-[13.5px] leading-[22px] text-[#B9CBD1]">
              Insured, eco-friendly cleaning for homes and businesses across
              Country.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-white/20 px-2.5 py-[5px] text-[11px] leading-[18px] text-[#B9CBD1]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[14px] font-bold leading-[22px] text-white">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] leading-[22px] text-[#B9CBD1] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-bold leading-[22px] text-white">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CONTACT_LINES.map((line) => (
                <li
                  key={line}
                  className="text-[13.5px] leading-[22px] text-[#B9CBD1]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-bold leading-[22px] text-white">
              Service Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICE_AREA_ROWS.map((row) => (
                <li
                  key={row.join("-")}
                  className="text-[13.5px] leading-[22px] text-[#B9CBD1]"
                >
                  {row.join(" · ")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[50px] flex flex-col gap-2 border-t border-white/10 pt-[22px] sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[12.5px] leading-5 text-[#B9CBD1]">
            © 2026 Country Cleaning Service All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
