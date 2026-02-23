import { Flame, BookOpen, AudioLines, Wind, Heart, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const rituals = [
  { icon: Flame, label: "Meditate" },
  { icon: BookOpen, label: "Journal" },
  { icon: Music, label: "Mantra" },
  { icon: AudioLines, label: "Chant" },
  { icon: Wind, label: "Breathe" },
  { icon: Heart, label: "Gratitude" },
];

const QuickRituals = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 mt-8">
      <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
        Quick Rituals
      </span>
      <div className="flex gap-4 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {rituals.map((ritual, i) => (
          <button
            key={i}
            onClick={() => {
              if (ritual.label === "Mantra") navigate("/mantra");
            }}
            className="flex flex-col items-center gap-2.5 min-w-[64px] group animate-scale-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl card-gradient shadow-glow border border-border/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <ritual.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-[11px] font-body font-medium text-muted-foreground">
              {ritual.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickRituals;
