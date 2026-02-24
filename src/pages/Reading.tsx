import { ArrowLeft, BookOpen, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "The Bhagavad Gita",
    author: "Vyasa",
    chapters: 18,
    emoji: "📜",
    tag: "Sacred Text",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "The Inner Light",
    author: "Jiddu Krishnamurti",
    chapters: 12,
    emoji: "✨",
    tag: "Philosophy",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Stillness Speaks",
    author: "Eckhart Tolle",
    chapters: 10,
    emoji: "🪷",
    tag: "Mindfulness",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    chapters: 48,
    emoji: "🙏",
    tag: "Memoir",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    chapters: 10,
    emoji: "⏳",
    tag: "Awareness",
    span: "col-span-1",
  },
  {
    id: 6,
    title: "Patanjali Yoga Sutras",
    author: "Patanjali",
    chapters: 4,
    emoji: "🕉️",
    tag: "Yoga",
    span: "col-span-1",
  },
];

const ReadingPage = () => {
  const navigate = useNavigate();

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
            Library
          </p>
          <h1 className="text-3xl font-bold font-display text-foreground leading-tight">
            Reading
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
            Timeless wisdom for your journey ✦
          </p>
        </div>

        {/* Featured */}
        <div className="px-6 mt-4 animate-fade-in" style={{ animationDelay: "80ms" }}>
          <div className="card-gradient rounded-3xl p-6 shadow-glow border border-border/20">
            <div className="flex items-center gap-1.5 mb-3">
              <Star className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
              <span className="text-[10px] font-body font-semibold text-primary tracking-widest-custom uppercase">
                Continue Reading
              </span>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-20 rounded-xl bg-primary/10 flex items-center justify-center text-3xl">
                📜
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-foreground">The Bhagavad Gita</h3>
                <p className="text-xs font-body text-muted-foreground mt-1">Chapter 4: Knowledge</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[22%] bg-primary rounded-full" />
                  </div>
                  <span className="text-[10px] font-body text-muted-foreground">22%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="px-6 mt-6 pb-12">
          <span className="text-xs font-body font-medium text-muted-foreground tracking-widest-custom uppercase">
            All Books
          </span>
          <div className="grid grid-cols-2 gap-3 mt-4 auto-rows-[140px]">
            {books.map((book, i) => (
              <button
                key={book.id}
                className={`${book.span} card-gradient rounded-3xl p-5 shadow-card border border-border/20 flex flex-col justify-between text-left hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{book.emoji}</span>
                    <span className="text-[9px] font-body font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {book.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground mt-2 leading-tight">
                    {book.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-body text-muted-foreground">{book.author}</p>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] font-body text-muted-foreground">
                      {book.chapters} ch
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
