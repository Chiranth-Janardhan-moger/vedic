const TodayProgress = () => {
  return (
    <div className="px-6 mt-8 mb-28">
      <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
        Today's Journey
      </span>
      <div className="mt-3 card-gradient rounded-3xl p-6 shadow-glow border border-border/20 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-lg font-semibold text-foreground">Morning Flow</span>
          <span className="text-xs font-body text-primary font-medium">2 of 4</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: "50%" }}
          />
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {["Breathwork", "Meditation", "Journaling", "Gratitude"].map((step, i) => (
            <div
              key={i}
              className={`text-[10px] font-body font-medium px-3 py-1.5 rounded-full transition-colors ${
                i < 2
                  ? "bg-primary/12 text-primary"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayProgress;
