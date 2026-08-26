import { useState } from "react";
import Eyebrow from "./Eyebrow";

const FILTERS = ["All", "Kitchens", "Bathrooms", "Carpets", "Offices"] as const;

type Filter = (typeof FILTERS)[number];

type Result = {
  title: string;
  category: Exclude<Filter, "All">;
  image: string;
};

const RESULTS: Result[] = [
  {
    title: "Deep Kitchen Clean",
    category: "Kitchens",
    image: "https://res.cloudinary.com/jvhaorsn/image/upload/v1787781897/results-1-kitchen_tdbs28.png",
  },
  {
    title: "Bathroom Sanitizing",
    category: "Bathrooms",
    image: "https://res.cloudinary.com/jvhaorsn/image/upload/v1787781897/results-2-bathroom_wjshzu.png",
  },
  {
    title: "Carpet Steam Cleaning",
    category: "Carpets",
    image: "https://res.cloudinary.com/jvhaorsn/image/upload/v1787781897/results-3-carpet_oofufi.png",
  },
  {
    title: "Post-Reno Office Clean",
    category: "Offices",
    image: "https://res.cloudinary.com/jvhaorsn/image/upload/v1787781897/results-4-office_omjgxo.png",
  },
];

function ResultCard({ result }: { result: Result }) {
  const [position, setPosition] = useState(50);

  return (
    <li className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0F2432]">
      <div className="relative select-none">
        <img
          src={result.image}
          alt={result.title}
          className="aspect-[4/3] w-full object-cover"
          draggable={false}
        />

        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-bold uppercase leading-[18px] tracking-[0.55px] text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[#1F9E82] px-3 py-1 text-[11px] font-bold uppercase leading-[18px] tracking-[0.55px] text-white">
          After
        </span>

        {/* Divider line + grab handle, positioned by the slider value. */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0px_0px_0px_3px_rgba(255,255,255,0.25)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[16px] leading-[26px] text-navy shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
            ⇔
          </span>
        </div>

        {/* Transparent range input drives the reveal: drag, touch and keyboard */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Reveal the before and after of ${result.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-[18px]">
        <h3 className="text-[15px] font-semibold leading-6 text-white">
          {result.title}
        </h3>
        <span className="text-[12px] leading-[19px] text-[#8FA6AD]">
          Sample result
        </span>
      </div>
    </li>
  );
}

function Results() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visible =
    activeFilter === "All"
      ? RESULTS
      : RESULTS.filter((result) => result.category === activeFilter);

  return (
    <section
      id="before-after"
      className="bg-navy px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto max-w-[1235px]">
        <Eyebrow>See the difference</Eyebrow>

        <h2 className="mt-3.5 font-display text-[32px] font-extrabold leading-[1.3] tracking-[-0.02em] text-white sm:text-[40px] sm:leading-[64px]">
          Before &amp; after results
        </h2>

        <p className="mt-3.5 max-w-[600px] text-[16px] leading-[26px] text-[#B9CBD1] sm:text-[16.5px]">
          Drag the slider on each card to reveal the transformation.
        </p>

        <div className="mt-14 flex flex-wrap gap-2.5">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`flex h-9 items-center justify-center rounded-full border px-[18px] text-center text-[13.5px] leading-4 transition-colors ${
                  isActive
                    ? "border-[#1F9E82] bg-[#1F9E82] text-white"
                    : "border-white/25 text-white hover:border-white/60"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((result) => (
            <ResultCard key={result.title} result={result} />
          ))}
        </ul>

        <p className="mt-8 max-w-[640px] border-t border-white/[0.12] pt-5 text-[12.5px] leading-5 text-[#8FA6AD]">
          Photos above are stock placeholders used to demo the slider, not
          photos of actual client jobs. Replace the image links in the code with
          your own before/after job photos before publishing — real photos build
          far more trust than stock imagery, and Country advertising standards
          (Competition Bureau) require that results shown reflect genuine work.
        </p>
      </div>
    </section>
  );
}

export default Results;
