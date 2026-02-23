import GreetingHeader from "@/components/GreetingHeader";
import DailyInsight from "@/components/DailyInsight";
import QuickRituals from "@/components/QuickRituals";
import TodayProgress from "@/components/TodayProgress";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden scrollbar-hide warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10">
        <GreetingHeader />
        <DailyInsight />
        <QuickRituals />
        <TodayProgress />
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
