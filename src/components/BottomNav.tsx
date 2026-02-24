import { Home, Compass, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Ask Rishi", path: "/chat" },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50">
      <div className="mx-4 mb-4 rounded-3xl card-gradient shadow-glow border border-border/20 px-2 py-2 backdrop-blur-md">
        <div className="flex justify-around">
          {tabs.map((tab, i) => {
            const isActive = location.pathname === tab.path;
            const isChat = tab.label === "Ask Rishi";
            return (
              <button
                key={i}
                onClick={() => navigate(tab.path)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10"
                    : "hover:bg-secondary"
                }`}
              >
                {isChat ? (
                  <div className={`w-8 h-8 -mt-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-primary shadow-glow" : "bg-primary/15"
                  }`}>
                    <tab.icon
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive ? "text-primary-foreground" : "text-primary"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                ) : (
                  <tab.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                )}
                <span
                  className={`text-[10px] font-body font-medium transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
