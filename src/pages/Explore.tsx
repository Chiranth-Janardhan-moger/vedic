import { BookOpen, MessageCircle, Play, Heart, Edit3, Quote, Headphones, Compass } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden scrollbar-hide warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 pt-14 pb-4 animate-fade-in-up">
          <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-2">
            Discover
          </p>
          <h1 className="text-3xl font-bold font-display text-foreground leading-tight">
            Explore
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
            Curated paths for your inner journey ✦
          </p>
        </div>

        {/* Reading Card */}
       <Link to="/reading" className="block px-6 mt-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
  <div className="card-gradient rounded-3xl p-5 shadow-glow border border-border/20 flex gap-4 hover:scale-[1.02] transition">
    <div className="flex-1">
      <div className="flex items-center gap-1.5 mb-2">
        <BookOpen className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
        <span className="text-[10px] font-body font-semibold text-primary tracking-widest-custom uppercase">
          Reading
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground leading-snug">
        The Inner Light
      </h3>
      <p className="text-xs font-body text-muted-foreground mt-1">
        Chapter 4: Stillness
      </p>
    </div>
    <div className="w-20 h-20 rounded-2xl bg-primary/10 overflow-hidden flex items-center justify-center">
      <span className="text-3xl">📖</span>
    </div>
  </div>
</Link>

        {/* Daily Mantra */}
        <div className="px-6 mt-4 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="card-gradient rounded-3xl p-5 shadow-glow border border-border/20">
            <div className="flex items-center gap-1.5 mb-2">
              <MessageCircle className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
              <span className="text-[10px] font-body font-semibold text-primary tracking-widest-custom uppercase">
                Daily Mantra
              </span>
            </div>
            <p className="font-display text-base text-foreground italic leading-relaxed">
              "I breathe in peace, I breathe out love."
            </p>
          </div>
        </div>

        {/* Meditation Card */}
        <div className="px-6 mt-4 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
          <div className="card-gradient rounded-3xl p-5 shadow-glow border border-border/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Headphones className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  <span className="text-[10px] font-body font-semibold text-primary tracking-widest-custom uppercase">
                    Meditation
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Zen Flow</h3>
                <p className="text-xs font-body text-muted-foreground mt-1">15 min • Mindfulness</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-primary shadow-glow flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
                <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
              </button>
            </div>

            <div className="mt-4 h-10 bg-secondary/50 rounded-2xl flex items-center justify-center gap-[3px] px-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-primary/40"
                  style={{ height: `${Math.random() * 20 + 8}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gratitude + Journaling */}
        <div className="px-6 mt-4 flex gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="flex-1 card-gradient rounded-3xl p-5 shadow-card border border-border/20">
            <Heart className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-sm font-bold text-foreground">Gratitude</h3>
            <p className="text-[10px] font-body text-muted-foreground mt-1 leading-relaxed">
              What are you thankful for?
            </p>
            <button className="text-xs font-body font-semibold text-primary mt-3 flex items-center gap-1 hover:gap-2 transition-all duration-300">
              Log Now <span>→</span>
            </button>
          </div>
          <div className="flex-1 card-gradient rounded-3xl p-5 shadow-card border border-border/20">
            <Edit3 className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-sm font-bold text-foreground">Journaling</h3>
            <p className="text-[10px] font-body text-muted-foreground mt-1 leading-relaxed">
              Capture your thoughts.
            </p>
            <button className="text-xs font-body font-semibold text-primary mt-3 flex items-center gap-1 hover:gap-2 transition-all duration-300">
              New Entry <span>+</span>
            </button>
          </div>
        </div>

        {/* Library of Wisdom */}
        <div className="px-6 mt-4 mb-28 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          <div className="bg-secondary rounded-3xl p-6 shadow-card border border-border/20">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[10px] font-body font-semibold text-muted-foreground tracking-widest-custom uppercase">
                Library of Wisdom
              </span>
              <Quote className="w-6 h-6 text-primary/40" strokeWidth={1.5} />
            </div>
            <p className="font-display text-base font-semibold text-foreground leading-snug">
              Explore our curated collection of Beautiful Quotes.
            </p>
            <div className="flex items-center mt-4">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-[8px] text-primary font-body font-bold">
                      {["ॐ", "☸", "✦"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-body text-muted-foreground ml-2">+12</span>
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Explore;
