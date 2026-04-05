import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface CourseCardProps {
  id: string;
  title: string;
  progress: number;
  lastAccessed?: boolean;
  description?: string;
}

export function CourseCard({ id, title, progress, lastAccessed, description }: CourseCardProps) {
  return (
    <Link to={`/course/${id}`}>
      <div className={`group relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${lastAccessed ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}`}>
        {lastAccessed && (
          <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
            Continue learning
          </div>
        )}
        
        <h3 className="mb-2 group-hover:text-primary transition-colors font-dashboard">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center text-primary group-hover:gap-2 transition-all">
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
