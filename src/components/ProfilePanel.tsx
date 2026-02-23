import { X, Flame, Moon, Sun, Leaf, Sparkles, Heart } from "lucide-react";

interface ProfilePanelProps {
  open: boolean;
  onClose: () => void;
}

const stats = [
  { label: "Streak", value: "7 days", icon: Flame },
  { label: "Sessions", value: "42", icon: Sparkles },
  { label: "Mindful Hrs", value: "18.5", icon: Moon },
];

const doshaTraits = [
  { name: "Vata", level: 35, color: "bg-primary/60" },
  { name: "Pitta", level: 50, color: "bg-primary" },
  { name: "Kapha", level: 15, color: "bg-primary/30" },
];

const badges = [
  { icon: Sun, label: "Early Riser" },
  { icon: Leaf, label: "Sattvic" },
  { icon: Heart, label: "Compassion" },
  { icon: Sparkles, label: "Mindful" },
];

const ProfilePanel = ({ open, onClose }: ProfilePanelProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="card-gradient rounded-t-[2rem] shadow-glow border border-border/20 px-6 pt-6 pb-28 max-h-[85vh] overflow-y-auto scrollbar-hide">
          {/* Handle + Close */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-10 h-1 rounded-full bg-border mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
            <span className="text-xs font-body text-muted-foreground tracking-widest-custom uppercase">
              Your Profile
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Avatar + Name */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/15 shadow-glow border-2 border-primary/20 flex items-center justify-center mb-3">
              <span className="text-primary font-display text-3xl">ॐ</span>
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">Traveler</h2>
            <p className="text-xs font-body text-muted-foreground mt-1">On the path since Jan 2025</p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-3 mb-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 card-gradient rounded-2xl p-3 shadow-card border border-border/20 text-center"
              >
                <stat.icon className="w-4 h-4 text-primary mx-auto mb-1.5" strokeWidth={1.5} />
                <p className="text-base font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] font-body text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Dosha Balance */}
          <div className="mb-6">
            <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
              Dosha Balance
            </span>
            <div className="mt-3 space-y-3">
              {doshaTraits.map((dosha, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-body font-medium text-foreground w-12">{dosha.name}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${dosha.color} rounded-full transition-all duration-700 ease-out`}
                      style={{ width: `${dosha.level}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-body text-muted-foreground w-8 text-right">
                    {dosha.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
              Earned Badges
            </span>
            <div className="flex gap-3 mt-3">
              {badges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-2xl card-gradient shadow-card border border-border/20 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-body text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
