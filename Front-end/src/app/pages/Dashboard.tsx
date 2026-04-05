import { useState } from 'react';
import { Header } from '../components/Header';
import { CourseCard } from '../components/CourseCard';
import {
  Rocket,
  Book,
  Palette,
  Brain,
  Gamepad2,
  Trophy,
  Star,
  Search
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Mock data for demonstration
const courses = [
  {
    id: '1',
    title: 'Magic Math: Algebra',
    description: 'Master the magic of numbers and solve mysterious equations!',
    progress: 65,
    lastAccessed: true,
  },
  {
    id: '2',
    title: 'Time Travelers: Ancient Egypt',
    description: 'Hop into our time machine and explore the land of Pharaohs!',
    progress: 30,
    lastAccessed: false,
  },
  {
    id: '3',
    title: 'The Secret Life of Plants',
    description: 'Discover the hidden world of nature and how living things grow.',
    progress: 80,
    lastAccessed: false,
  },
  {
    id: '4',
    title: 'Storytelling Adventures',
    description: 'Create your own heroes and write epic tales of bravery!',
    progress: 15,
    lastAccessed: false,
  },
  {
    id: '5',
    title: 'Code Explorers: Python',
    description: 'Talk to computers and build your very own digital worlds.',
    progress: 45,
    lastAccessed: false,
  },
  {
    id: '6',
    title: 'Earth Guardians',
    description: 'Join the mission to protect our planet and its animals!',
    progress: 20,
    lastAccessed: false,
  }
];

const categories = [
  { name: 'All Adventures', icon: Rocket, id: 'all' },
  { name: 'Math Magic', icon: Brain, id: '1' },
  { name: 'Time Travel', icon: Book, id: '2' },
  { name: 'Art & Design', icon: Palette, id: '4' },
  { name: 'Coding Lab', icon: Gamepad2, id: '5' },
];

export function Dashboard() {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all'
    ? courses
    : courses.filter(c => c.id === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">

        {/* Side Nav */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <Trophy className="text-primary" /> Explorer
            </h2>

            <nav className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all group text-left font-medium ${filter === cat.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                >
                  <div className={`p-2 rounded-xl bg-background border border-border transition-colors ${filter === cat.id ? 'border-primary bg-white' : 'group-hover:border-primary'
                    }`}>
                    <cat.icon className={`w-5 h-5 ${filter === cat.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                  </div>
                  <span className={filter === cat.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}>{cat.name}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-muted/50 rounded-2xl text-center border border-border">
              <div className="bg-background border border-border w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-bold">1,240 XP</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Level 5 Explorer</p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {/* Welcome Section */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-foreground tracking-tight">
                Welcome back, Explorer
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Ready for your next learning adventure?
              </p>
            </div>

            <div className="relative group min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                className="pl-12 h-12 rounded-xl border border-border bg-card focus-visible:border-primary/50 text-base"
                placeholder="Find a course..."
              />
            </div>
          </div>

          {/* Featured Adventure */}
          <div className="mb-12 relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm">
            <div className="relative z-10 max-w-md">
              <Badge className="bg-primary/10 text-primary border-none mb-4 font-bold text-xs px-3 py-1">New Quest</Badge>
              <h2 className="text-3xl font-bold mb-3 leading-tight">Master the Stars</h2>
              <p className="text-base text-muted-foreground mb-6 font-medium">
                Our latest space exploration course is live. Join the mission to Mars today.
              </p>
              <Button size="lg" className="font-bold px-8 h-12 rounded-xl">
                Start Mission
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <Rocket className="w-full h-full rotate-45 scale-125 text-primary" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">My Adventures</h2>
            <Button variant="ghost" className="font-semibold text-primary hover:text-primary/80 hover:bg-primary/5">
              See all <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                progress={course.progress}
                lastAccessed={course.lastAccessed}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper Badge component since I used it above
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>;
}
