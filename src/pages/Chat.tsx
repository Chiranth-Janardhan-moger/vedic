import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
}

const sampleMessages: Message[] = [
  {
    id: 1,
    role: "user",
    content: "How do I find balance in a chaotic work environment where everything feels urgent?",
    time: "10:42 AM",
  },
  {
    id: 2,
    role: "assistant",
    content:
      'The sensation of chaos often arises not from the events themselves, but from our internal resistance to them. In the *Bhagavad Gita*, Krishna speaks of *Karma Yoga*—the discipline of action.\n\nTo find balance, one must act with full dedication but remain detached from the outcome. When urgency presses upon you, pause. Ask yourself: "Am I reacting to the noise, or am I responding to the duty?"\n\nPractice *Nishkama Karma*—selfless action. Do what needs to be done with your whole heart, but release attachment to the fruit of your labor.',
    time: "10:42 AM",
  },
];

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    const userMsg: Message = { id: Date.now(), role: "user", content: input, time };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "The ancient wisdom teaches us that every question carries within it the seed of its own answer. Sit quietly with your question, and let the stillness reveal what the noise conceals.",
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
  };

  const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 px-5 pt-12 pb-4">
        <button
          onClick={() => navigate("/home")}
          className="w-9 h-9 rounded-xl bg-secondary/60 backdrop-blur-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-display text-lg font-bold text-foreground">The Rishis</h1>
          <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase">
            Ancient Wisdom • AI Guide
          </p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-display text-sm">ॐ</span>
        </div>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto px-5 pb-4 scrollbar-hide">
        <p className="text-center text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase my-5">
          Today, {today}
        </p>

        <div className="space-y-5">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] animate-fade-in-up ${
                  msg.role === "user"
                    ? "card-gradient rounded-3xl rounded-br-lg shadow-card border border-border/20 px-5 py-4"
                    : "pl-3"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="border-l-2 border-primary/40 pl-4">
                    {msg.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-display text-[15px] leading-relaxed text-foreground mb-3 last:mb-0"
                        dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*([^*]+)\*/g, '<span class="text-primary font-semibold italic">$1</span>')
                            .replace(/"([^"]+)"/g, '<em>"$1"</em>'),
                        }}
                      />
                    ))}
                  </div>
                )}
                {msg.role === "user" && (
                  <p className="font-display text-[15px] leading-relaxed text-foreground">{msg.content}</p>
                )}
                {msg.role === "user" && (
                  <p className="text-[9px] font-body text-muted-foreground mt-2 text-right">{msg.time}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="relative z-10 px-4 pb-6 pt-2">
        <div className="card-gradient rounded-2xl shadow-glow border border-border/20 flex items-center gap-2 px-4 py-2 backdrop-blur-md">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask the Rishis..."
            className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/60 outline-none py-2"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-40 disabled:scale-100"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
