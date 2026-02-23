import leafworkLogo from "@/assets/leafwork-logo.png";

const insights = [
  {
    tag: "LEAF_WORK",
    quote: '"The quiet mind is not empty; it is full of the universe."',
    source: "VEDIC SUTRA",
    logo: leafworkLogo,
  },
  {
    tag: "FLOW",
    quote: '"Happiness is when what you think, what you say, and what you do are in harmony."',
    source: "PROVERB",
    logo: null,
  },
];

const DailyInsight = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="px-6 mt-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
          Daily Insight
        </span>
        <span className="text-xs font-body font-medium text-primary">
          {time}
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory scrollbar-hide">
        {insights.map((insight, i) => (
          <div
            key={i}
            className="min-w-[260px] max-w-[280px] snap-center card-gradient rounded-3xl p-6 shadow-glow border border-border/30 flex flex-col justify-between animate-fade-in-up backdrop-blur-sm"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div>
              {insight.logo && (
                <img
                  src={insight.logo}
                  alt="Leafwork"
                  className="w-10 h-10 mb-3 opacity-60 rounded-lg"
                />
              )}
              {!insight.logo && (
                <div className="w-10 h-10 mb-3 rounded-xl bg-primary/8 flex items-center justify-center">
                  <span className="text-primary text-lg">✦</span>
                </div>
              )}
              <p className="text-foreground font-display text-base leading-relaxed mt-2">
                {insight.quote}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-[10px] font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
                {insight.source}
              </span>
              <button className="text-xs font-body font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300">
                Reflect <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyInsight;
