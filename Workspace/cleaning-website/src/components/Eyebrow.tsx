type EyebrowProps = {
  children: string;
};

function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="flex items-center gap-2.5 text-[12px] font-semibold uppercase leading-[19px] tracking-[1.68px] text-[#1F9E82]">
      <span className="h-0.5 w-[22px] shrink-0 bg-[#1F9E82]" aria-hidden="true" />
      {children}
    </p>
  );
}

export default Eyebrow;
