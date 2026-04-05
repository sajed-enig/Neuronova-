import { BookOpen, Sparkles, Clock, Heart, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/Button';

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#4A9ECA' }}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-medium">NeuroNova</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/dashboard">
              <Button size="sm" variant="ghost">Dashboard</Button>
            </Link>
            <Button size="sm" variant="outline">Sign in</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-10 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white font-bold text-xs">
                  <Sparkles className="w-4 h-4" /> AI‑Powered Learning
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground font-display">
                  Learning that adapts to you.
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  NeuroNova transforms lessons into formats that match how you think, feel, and learn best.
                </p>

                <div className="rounded-r-xl p-6 border-l-4" style={{ background: '#FFF4EF', borderColor: '#FF8A65' }}>
                  <p className="text-lg text-foreground/90 leading-relaxed italic">
                    "Because no student should feel left behind by the way content is presented."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button size="lg" variant="primary">
                    I'm a Learner
                  </Button>
                </Link>
                <Link to="/teacher/dashboard">
                  <Button size="lg" variant="outline">
                    I'm a Teacher
                  </Button>
                </Link>
              </div>

              {/* Highlights strip */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">feel more confident</div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-bold">4+ formats</div>
                  <div className="text-sm text-muted-foreground">read, watch, listen, quiz</div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-bold">Live support</div>
                  <div className="text-sm text-muted-foreground">Nova mascot guidance</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMHRvZ2V0aGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NTM0NDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse students learning together"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
              {/* Floating preview cards (user-specific metrics removed from landing) */}
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl shadow-lg p-4 w-56">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary text-white">Personalized</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">Nova adapts to your pace and mood.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">Learn your way</h2>
            <p className="text-xl text-muted-foreground">
              Personalized learning experiences for every student
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">One lesson, many formats</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access the same content through reading, interactive quizzes, visual aids, and more. Choose what works best for you.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">Emotion-aware learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI adapts to your emotional state, providing support when you're stuck and challenges when you're ready.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">Learn at your own pace</h3>
              <p className="text-muted-foreground leading-relaxed">
                No pressure, no judgment. Take breaks when needed and move forward when you're ready. Your learning journey is yours alone.
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <div className="flex justify-center mb-1">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm font-semibold">Loved by students</div>
              <div className="text-xs text-muted-foreground">4.8/5 average rating</div>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <div className="flex justify-center mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm font-semibold">Safe and private</div>
              <div className="text-xs text-muted-foreground">You control your data</div>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border text-center">
              <div className="flex justify-center mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm font-semibold">Always improving</div>
              <div className="text-xs text-muted-foreground">New features weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4A9ECA' }}>
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">NeuroNova</span>
            </div>

            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2026 NeuroNova. Learning that adapts to you.
          </div>
        </div>
      </footer>
    </div>
  );
}
