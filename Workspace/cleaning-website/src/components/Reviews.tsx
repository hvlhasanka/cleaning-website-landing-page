import Eyebrow from "./Eyebrow";

const REVIEWS = [
  {
    quote:
      "Booked online in two minutes and the team was at my door the next morning. Kitchen has never looked better.",
    name: "Jasmine T.",
    location: "Toronto, ON",
  },
  {
    quote:
      "We switched our office to Country Cleaning Service six months ago — consistent, reliable, and always on time.",
    name: "Marc D.",
    location: "Calgary, AB",
  },
  {
    quote:
      "The move-out clean saved my damage deposit. Landlord had zero complaints.",
    name: "Aisha K.",
    location: "Victoria, BC",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#FCFBF7] px-5 py-16 sm:px-8 sm:py-20 lg:px-[8%] lg:py-24"
    >
      <div className="mx-auto max-w-[1235px]">
        <Eyebrow>Reviews</Eyebrow>

        <h2 className="mt-3.5 font-display text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[40px] sm:leading-[64px]">
          What our clients say
        </h2>

        <ul className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li
              key={review.name}
              className="flex flex-col rounded-[20px] border border-hairline bg-white p-7"
            >
              <p
                className="text-[14px] leading-[22px] tracking-[2px]"
                style={{ color: "#FF6B4A" }}
                aria-hidden="true"
              >
                ★★★★★
              </p>
              <span className="sr-only">Rated 5 out of 5 stars</span>

              <p className="mt-3.5 text-[14.5px] leading-[23px] text-[#1B2B33]">
                &quot;{review.quote}&quot;
              </p>

              <div className="mt-[18px] flex items-center gap-3">
                <span
                  className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-[#EAF4F2] font-display text-[16px] font-bold text-navy"
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </span>

                <div>
                  <p className="text-[13.5px] font-bold leading-[22px] text-[#1B2B33]">
                    {review.name}
                  </p>
                  <p className="text-[12px] leading-[19px] text-[#5C7078]">
                    {review.location}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;
