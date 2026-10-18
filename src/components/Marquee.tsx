interface MarqueeProps {
  text: string;
  badge?: string;
  className?: string;
}

export default function Marquee({
  text,
  badge = "[3]",
  className = "mb-16 sm:mb-20",
}: MarqueeProps) {
  const items = Array.from({ length: 6 });

  return (
    <div
      className={`border-t border-b border-gray-800/80 py-4 sm:py-6 overflow-hidden relative select-none group w-full ${className}`}
    >
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center">
          {items.map((_, i) => (
            <div
              key={`set1-${i}`}
              className="mx-4 sm:mx-8 lg:mx-12 flex items-center space-x-3 sm:space-x-6 cursor-pointer"
            >
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/30 transition-colors duration-200 ease-in-out group-hover:text-white/40 hover:!text-brand-primary whitespace-nowrap">
                {text}
              </span>
              <span className="text-xs sm:text-base lg:text-lg text-gray-400 font-mono">
                {badge}
              </span>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((_, i) => (
            <div
              key={`set2-${i}`}
              className="mx-4 sm:mx-8 lg:mx-12 flex items-center space-x-3 sm:space-x-6 cursor-pointer"
            >
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/30 transition-colors duration-200 ease-in-out group-hover:text-white/40 hover:!text-brand-primary whitespace-nowrap">
                {text}
              </span>
              <span className="text-xs sm:text-base lg:text-lg text-gray-400 font-mono">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
