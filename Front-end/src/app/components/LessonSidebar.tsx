import { Check, Circle, Lock } from 'lucide-react';
import { Link } from 'react-router';

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
  locked: boolean;
}

interface LessonSidebarProps {
  courseId: string;
  lessons: Lesson[];
  currentLessonId?: string;
}

export function LessonSidebar({ courseId, lessons, currentLessonId }: LessonSidebarProps) {
  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border overflow-y-auto font-dashboard">
      <div className="p-6">
        <h2 className="mb-6 text-sidebar-foreground">Course Content</h2>
        
        <div className="space-y-2">
          {lessons.map((lesson, index) => {
            const isActive = lesson.id === currentLessonId;
            
            return (
              <Link 
                key={lesson.id}
                to={lesson.locked ? '#' : `/course/${courseId}/lesson/${lesson.id}`}
                className={`block`}
              >
                <div className={`
                  flex items-start gap-3 p-4 rounded-xl transition-all duration-200
                  ${isActive ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'hover:bg-sidebar-accent/50'}
                  ${lesson.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}>
                  <div className="flex-shrink-0 mt-0.5">
                    {lesson.completed ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : lesson.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Circle className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      Lesson {index + 1}
                    </div>
                    <div className={`text-sm leading-relaxed ${isActive ? '' : 'text-sidebar-foreground'}`}>
                      {lesson.title}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
