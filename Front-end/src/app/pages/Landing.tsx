import { BookOpen, Sparkles, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/Button';

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-medium">NeuroNova</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-medium leading-tight text-foreground">
                  Learning that adapts to you.
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  NeuroNova transforms lessons into formats that match how you think, feel, and learn best.
                </p>
                
                <div className="bg-accent/30 border-l-4 border-accent rounded-r-xl p-6">
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
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMHRvZ2V0aGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NTM0NDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse students learning together"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
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
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="mb-3">Emotion-aware learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI adapts to your emotional state, providing support when you're stuck and challenges when you're ready.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Learn at your own pace</h3>
              <p className="text-muted-foreground leading-relaxed">
                No pressure, no judgment. Take breaks when needed and move forward when you're ready. Your learning journey is yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
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
