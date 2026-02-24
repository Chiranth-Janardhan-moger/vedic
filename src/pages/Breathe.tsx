import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const exercises = [
  {
    id: 1,
    name: "Box Breathing",
    description: "Equal inhale, hold, exhale, hold",
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    emoji: "🔲",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    name: "4-7-8 Relaxing",
    description: "Deep calming breath",
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    emoji: "🌙",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Energizing",
    description: "Quick revitalizing breath",
    inhale: 3,
    hold1: 0,
    exhale: 3,
    hold2: 0,
    emoji: "⚡",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    name: "Deep Calm",
    description: "Slow deep breathing",
    inhale: 5,
    hold1: 3,
    exhale: 7,
    hold2: 0,
    emoji: "🍃",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    name: "Pranayama",
    description: "Yogic breath control",
    inhale: 4,
    hold1: 4,
    exhale: 6,
    hold2: 2,
    emoji: "🕉️",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    name: "Morning Rise",
    description: "Awaken your energy",
    inhale: 3,
    hold1: 2,
    exhale: 4,
    hold2: 0,
    emoji: "🌅",
    span: "col-span-1 row-span-1",
  },
];

type Phase = "idle" | "inhale" | "hold1" | "exhale" | "hold2";

const BreatheExercisePage = ({
  exercise,
  onBack,
}: {
  exercise: (typeof exercises)[0];
  onBack: () => void;
}) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const timerRef = useRef(0);

  const getPhaseLabel = () => {
    switch (phase) {
      case "idle":
        return "Tap to Start";
      case "inhale":
        return "Inhale";
      case "hold1":
        return "Hold";
      case "exhale":
        return "Exhale";
      case "hold2":
        return "Hold";
      default:
        return "";
    }
  };

  const getPhaseDuration = (p: Phase) => {
    switch (p) {
      case "inhale":
        return exercise.inhale;
      case "hold1":
        return exercise.hold1;
      case "exhale":
        return exercise.exhale;
      case "hold2":
        return exercise.hold2;
      default:
        return 0;
    }
  };

  const getNextPhase = (current: Phase): Phase => {
    switch (current) {
      case "inhale":
        return exercise.hold1 > 0 ? "hold1" : "exhale";
      case "hold1":
        return "exhale";
      case "exhale":
        return exercise.hold2 > 0 ? "hold2" : "inhale";
      case "hold2":
        return "inhale";
      default:
        return "inhale";
    }
  };

  const startBreathing = () => {
    if (isActive) {
      setIsActive(false);
      setPhase("idle");
      phaseRef.current = "idle";
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setIsActive(true);
    const firstPhase: Phase = "inhale";
    setPhase(firstPhase);
    phaseRef.current = firstPhase;
    timerRef.current = getPhaseDuration(firstPhase);
    setTimer(timerRef.current);

    intervalRef.current = setInterval(() => {
      timerRef.current -= 1;
      setTimer(timerRef.current);

      if (timerRef.current <= 0) {
        const next = getNextPhase(phaseRef.current);
        phaseRef.current = next;
        setPhase(next);
        timerRef.current = getPhaseDuration(next);
        setTimer(timerRef.current);
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-secondary/60 backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase">
          {exercise.name}
        </span>
        <div className="w-9" />
      </div>

      {/* Breathing Circle */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
        {/* Technique info */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs font-body text-muted-foreground tracking-widest-custom uppercase mb-2">
            {exercise.description}
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">
            {exercise.name}
          </h2>
        </div>

        {/* Circle */}
        <div className="relative flex items-center justify-center mb-16">
          {/* Outer ripple glow effects - always render but start from center */}
          <div
            className={`absolute rounded-full bg-primary/5 transition-all ease-in-out ${
              isActive && (phase === "inhale" || phase === "hold1")
                ? "w-72 h-72 opacity-100"
                : "w-40 h-40 opacity-0"
            }`}
            style={{
              transitionDuration: `${
                phase === "inhale"
                  ? exercise.inhale * 1000
                  : phase === "exhale"
                  ? exercise.exhale * 1000
                  : phase === "hold1"
                  ? exercise.hold1 * 1000
                  : exercise.hold2 * 1000
              }ms`,
            }}
          />
          <div
            className={`absolute rounded-full bg-primary/10 transition-all ease-in-out ${
              isActive && (phase === "inhale" || phase === "hold1")
                ? "w-60 h-60 opacity-100"
                : "w-40 h-40 opacity-0"
            }`}
            style={{
              transitionDuration: `${
                phase === "inhale"
                  ? exercise.inhale * 1000
                  : phase === "exhale"
                  ? exercise.exhale * 1000
                  : phase === "hold1"
                  ? exercise.hold1 * 1000
                  : exercise.hold2 * 1000
              }ms`,
            }}
          />
          <div
            className={`absolute rounded-full bg-primary/15 transition-all ease-in-out ${
              isActive && (phase === "inhale" || phase === "hold1")
                ? "w-48 h-48 opacity-100"
                : "w-40 h-40 opacity-0"
            }`}
            style={{
              transitionDuration: `${
                phase === "inhale"
                  ? exercise.inhale * 1000
                  : phase === "exhale"
                  ? exercise.exhale * 1000
                  : phase === "hold1"
                  ? exercise.hold1 * 1000
                  : exercise.hold2 * 1000
              }ms`,
            }}
          />
          
          {/* Main circle - stays same size, only glow changes */}
          <button
            onClick={startBreathing}
            className={`w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex flex-col items-center justify-center relative z-10 transition-all ease-in-out ${
              !isActive
                ? "hover:scale-105 active:scale-95 duration-300 shadow-[0_0_20px_5px_hsl(24_80%_52%/0.1)]"
                : phase === "inhale" || phase === "hold1"
                ? "shadow-[0_0_80px_30px_hsl(24_80%_52%/0.5)]"
                : "shadow-[0_0_30px_10px_hsl(24_80%_52%/0.15)]"
            }`}
            style={{
              transitionDuration: isActive
                ? `${
                    phase === "inhale"
                      ? exercise.inhale * 1000
                      : phase === "exhale"
                      ? exercise.exhale * 1000
                      : phase === "hold1"
                      ? exercise.hold1 * 1000
                      : exercise.hold2 * 1000
                  }ms`
                : "300ms",
            }}
          >
            <span className="font-display text-lg font-bold text-primary">
              {isActive ? timer : ""}
            </span>
            <span className="text-xs font-body font-medium text-primary/80 mt-1">
              {getPhaseLabel()}
            </span>
          </button>
        </div>

        {/* Pattern info */}
        <div className="flex items-center gap-3 animate-fade-in">
          {exercise.inhale > 0 && (
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-display font-bold text-foreground">
                {exercise.inhale}s
              </span>
              <span className="text-[10px] font-body text-muted-foreground">
                Inhale
              </span>
            </div>
          )}
          {exercise.hold1 > 0 && (
            <>
              <div className="w-4 h-[1px] bg-border" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-display font-bold text-foreground">
                  {exercise.hold1}s
                </span>
                <span className="text-[10px] font-body text-muted-foreground">
                  Hold
                </span>
              </div>
            </>
          )}
          {exercise.exhale > 0 && (
            <>
              <div className="w-4 h-[1px] bg-border" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-display font-bold text-foreground">
                  {exercise.exhale}s
                </span>
                <span className="text-[10px] font-body text-muted-foreground">
                  Exhale
                </span>
              </div>
            </>
          )}
          {exercise.hold2 > 0 && (
            <>
              <div className="w-4 h-[1px] bg-border" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-display font-bold text-foreground">
                  {exercise.hold2}s
                </span>
                <span className="text-[10px] font-body text-muted-foreground">
                  Hold
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const BreathePage = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState<
    (typeof exercises)[0] | null
  >(null);

  if (selectedExercise) {
    return (
      <BreatheExercisePage
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)}
      />
    );
  }

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden scrollbar-hide warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-12 pb-2">
          <button
            onClick={() => navigate("/home")}
            className="w-9 h-9 rounded-xl bg-secondary/60 backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
        </div>

        <div className="px-6 pb-4 animate-fade-in">
          <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-2">
            Breathwork
          </p>
          <h1 className="text-3xl font-bold font-display text-foreground leading-tight">
            Breathe
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
            Choose a breathing technique to begin ✦
          </p>
        </div>

        {/* Exercise Grid */}
        <div className="px-6 mt-4 pb-12">
          <div className="grid grid-cols-2 gap-3 auto-rows-[120px]">
            {exercises.map((ex, i) => (
              <button
                key={ex.id}
                onClick={() => setSelectedExercise(ex)}
                className={`${ex.span} card-gradient rounded-3xl p-5 shadow-card border border-border/20 flex flex-col justify-between text-left hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  <span className="text-2xl">{ex.emoji}</span>
                  <h3 className="font-display text-sm font-bold text-foreground mt-2 leading-tight">
                    {ex.name}
                  </h3>
                </div>
                <p className="text-[10px] font-body text-muted-foreground leading-relaxed">
                  {ex.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathePage;
