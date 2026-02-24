import { useNavigate } from "react-router-dom";

const GreetingHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-start justify-between px-6 pt-14 pb-4">
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-2">
          Namaste
        </p>
        <h1 className="text-3xl font-bold font-display text-foreground leading-tight">
          Pranam,
        </h1>
        <h1 className="text-3xl font-bold font-display text-primary leading-tight italic">
          Traveler.
        </h1>
        <p className="text-muted-foreground font-body text-sm mt-2 max-w-[220px] leading-relaxed">
          The energy is grounding today. ✦
        </p>
      </div>
      <button
        onClick={() => navigate("/profile")}
        className="w-11 h-11 rounded-full bg-secondary overflow-hidden mt-1 shadow-glow border border-border/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-display text-base font-semibold">
          ॐ
        </div>
      </button>
    </div>
  );
};

export default GreetingHeader;
