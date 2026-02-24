import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Flame, Moon, Sparkles, Sun, Leaf, Heart, Minus, Plus, Settings, User, Bell, Shield, LogOut } from "lucide-react";

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

const settingsItems = [
  { icon: User, label: "Edit Profile" },
  { icon: Bell, label: "Notifications" },
  { icon: Shield, label: "Privacy" },
  { icon: LogOut, label: "Sign Out" },
];

const Profile = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden scrollbar-hide warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-14 pb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
            Your Profile
          </span>
        </div>

        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-8 animate-fade-in-up">
          <div className="w-24 h-24 rounded-full bg-primary/15 shadow-glow border-2 border-primary/20 flex items-center justify-center mb-4">
            <span className="text-primary font-display text-4xl">ॐ</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Traveler</h2>
          <p className="text-xs font-body text-muted-foreground mt-1">On the path since Jan 2025</p>
        </div>

        {/* Stats */}
        <div className="px-6 mb-8">
          <div className="flex gap-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 card-gradient rounded-2xl p-4 shadow-card border border-border/20 text-center animate-scale-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] font-body text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dosha Balance */}
        <div className="px-6 mb-8 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
            Dosha Balance
          </span>
          <div className="mt-3 card-gradient rounded-3xl p-5 shadow-card border border-border/20">
            <div className="space-y-3">
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
        </div>

        {/* Badges */}
        <div className="px-6 mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
            Earned Badges
          </span>
          <div className="flex gap-3 mt-3">
            {badges.map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 rounded-2xl card-gradient shadow-card border border-border/20 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-body text-muted-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Font Size Setting */}
        <div className="px-6 mb-8 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
          <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
            Settings
          </span>
          <div className="mt-3 card-gradient rounded-3xl p-5 shadow-card border border-border/20">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-display text-sm font-semibold text-foreground">Font Size</p>
                <p className="text-[10px] font-body text-muted-foreground mt-0.5">Adjust text size</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                  className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                >
                  <Minus className="w-4 h-4 text-foreground" />
                </button>
                <span className="text-sm font-body font-semibold text-foreground w-8 text-center">{fontSize}</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 1))}
                  className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              {settingsItems.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 py-3 px-1 rounded-xl hover:bg-secondary/50 transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-sm font-body text-foreground">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-28" />
      </div>
    </div>
  );
};

export default Profile;
