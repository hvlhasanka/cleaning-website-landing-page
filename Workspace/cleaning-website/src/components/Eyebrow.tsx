type EyebrowProps = {
  children: string;
  tone?: "default" | "onDark";
};


function Eyebrow({ children, tone = "default" }: EyebrowProps) {
  const color = tone === "onDark" ? "#5FC7AE" : "#1F9E82";

  return (
    <p
      className="flex items-center gap-2.5 text-[12px] font-semibold uppercase leading-[19px] tracking-[1.68px]"
      style={{ color }}
    >
      <span
        className="h-0.5 w-[22px] shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

export default Eyebrow;
