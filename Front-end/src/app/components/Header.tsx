import { BookOpen, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const isTeacher = location.pathname.startsWith('/teacher');

  return (
    <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#4A9ECA' }}>
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            NeuroNova
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {!isTeacher ? (
            <>
              <Link to="/dashboard" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                My Courses
              </Link>
              <Link to="/teacher/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Teacher Mode
              </Link>
            </>
          ) : (
            <>
              <Link to="/teacher/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/teacher/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                My Courses
              </Link>
              <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Student Mode
              </Link>
            </>
          )}
          <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-border bg-muted/50">
            <UserCircle className="w-5 h-5 text-muted-foreground" />
          </div>
        </nav>
      </div>
    </header>
  );
}
