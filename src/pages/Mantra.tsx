import { useState } from "react";
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Music2, List, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mantras = [
  { id: 1, title: "Om Namah Shivaya", artist: "Sacred Chants", duration: "8:24" },
  { id: 2, title: "Gayatri Mantra", artist: "Vedic Hymns", duration: "11:02" },
  { id: 3, title: "Mahamrityunjaya Mantra", artist: "Healing Mantras", duration: "9:45" },
  { id: 4, title: "Om Mani Padme Hum", artist: "Tibetan Chants", duration: "7:30" },
  { id: 5, title: "Hanuman Chalisa", artist: "Devotional", duration: "12:18" },
  { id: 6, title: "Shanti Mantra", artist: "Peace Chants", duration: "6:55" },
  { id: 7, title: "Durga Mantra", artist: "Shakti Chants", duration: "10:10" },
];

const MantraPage = () => {
  const navigate = useNavigate();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showList, setShowList] = useState(false);
  const [progress, setProgress] = useState(32);

  const track = mantras[currentTrack];

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev === 0 ? mantras.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === mantras.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-4">
        <button
          onClick={() => navigate("/home")}
          className="w-9 h-9 rounded-xl bg-secondary/60 backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase">
          Mantra Player
        </span>
        <button
          onClick={() => setShowList(!showList)}
          className="w-9 h-9 rounded-xl bg-secondary/60 backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {showList ? <X className="w-4 h-4 text-foreground" /> : <List className="w-4 h-4 text-foreground" />}
        </button>
      </div>

      {/* Track List Overlay */}
      {showList && (
        <div className="relative z-10 flex-1 px-5 pb-6 overflow-y-auto scrollbar-hide animate-fade-in-up">
          <p className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase mb-4">
            All Mantras
          </p>
          <div className="space-y-2">
            {mantras.map((m, i) => (
              <button
                key={m.id}
                onClick={() => {
                  setCurrentTrack(i);
                  setShowList(false);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  i === currentTrack
                    ? "card-gradient shadow-glow border border-primary/20"
                    : "hover:bg-secondary/40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === currentTrack ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  <Music2
                    className={`w-4 h-4 ${
                      i === currentTrack ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1 text-left">
                  <p
                    className={`text-sm font-body font-medium ${
                      i === currentTrack ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {m.title}
                  </p>
                  <p className="text-[11px] font-body text-muted-foreground mt-0.5">{m.artist}</p>
                </div>
                <span className="text-[11px] font-body text-muted-foreground">{m.duration}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Player View */}
      {!showList && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pb-12">
          {/* Artwork */}
          <div className="w-56 h-56 rounded-[2rem] bg-secondary/40 shadow-glow border border-border/20 flex items-center justify-center relative overflow-hidden mb-10 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="relative flex flex-col items-center gap-3">
              <span className="text-7xl">🕉️</span>
              <div className="w-20 h-[1px] bg-primary/20 rounded-full" />
            </div>
          </div>

          {/* Track Info */}
          <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="font-display text-2xl font-bold text-foreground">{track.title}</h2>
            <p className="text-sm font-body text-muted-foreground mt-2">{track.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-10 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-body text-muted-foreground">2:41</span>
              <span className="text-[10px] font-body text-muted-foreground">{track.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-2xl bg-secondary/60 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <SkipBack className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-primary shadow-glow flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-primary-foreground" />
              ) : (
                <Play className="w-7 h-7 text-primary-foreground ml-0.5" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-2xl bg-secondary/60 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <SkipForward className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MantraPage;
