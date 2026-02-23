import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden scrollbar-hide warm-gradient flex flex-col">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-display font-bold text-foreground leading-tight">
            Pranav
          </h1>
          <h1 className="text-4xl font-display font-bold text-primary leading-tight italic mb-6">
            Samadhaan
          </h1>
        </div>

        <p
          className="text-sm font-body text-muted-foreground leading-relaxed max-w-xs animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Experience the Fusion of Artificial Intelligence &amp; Knowledge of Rishis. We provide personalized guidance for{" "}
          <span className="text-foreground font-medium">Healing</span> your body,{" "}
          <span className="text-foreground font-medium">Rejuvenating</span> your mind, and{" "}
          <span className="text-foreground font-medium">Awakening</span> your spirit through the timeless wisdom of Ayurveda and Meditation.
        </p>

        <p
          className="mt-8 text-xs font-body text-muted-foreground tracking-widest-custom uppercase animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Begin Your Samadhaan Journey...
        </p>

        <button
          onClick={() => navigate("/home")}
          className="mt-6 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          Begin Your Samadhaan Journey
        </button>
      </div>
    </div>
  );
};

export default Landing;
