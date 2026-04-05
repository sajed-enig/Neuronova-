import { useParams } from 'react-router';
import { Header } from '../components/Header';
import { LessonSidebar } from '../components/LessonSidebar';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

// Mock data
const courseData: Record<string, any> = {
  '1': {
    title: 'Introduction to Algebra',
    description: 'Master the fundamentals of algebraic thinking and problem-solving',
    progress: 65,
    lessons: [
      { id: 'l1', title: 'Understanding Variables and Constants', completed: true, locked: false },
      { id: 'l2', title: 'Basic Operations with Variables', completed: true, locked: false },
      { id: 'l3', title: 'Solving Linear Equations', completed: true, locked: false },
      { id: 'l4', title: 'Working with Inequalities', completed: false, locked: false },
      { id: 'l5', title: 'Introduction to Functions', completed: false, locked: false },
      { id: 'l6', title: 'Graphing Linear Functions', completed: false, locked: true },
      { id: 'l7', title: 'Systems of Equations', completed: false, locked: true }
    ]
  }
};

export function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId || '1'];
  
  if (!course) {
    return <div>Course not found</div>;
  }
  
  // Find the next lesson to continue
  const nextLesson = course.lessons.find((l: any) => !l.completed && !l.locked);
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <LessonSidebar 
          courseId={courseId || '1'}
          lessons={course.lessons}
        />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Course Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-medium mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">
                {course.description}
              </p>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="text-lg">{course.progress}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Course Overview */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">About this course</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    This course will guide you through the fundamental concepts of algebra. 
                    You'll learn to work with variables, solve equations, and understand functions. 
                    Each lesson is designed to build on the previous one, helping you develop 
                    a strong foundation in algebraic thinking.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="mb-6">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Work confidently with variables and constants',
                    'Solve linear equations and inequalities',
                    'Understand and apply functions',
                    'Graph linear relationships',
                    'Solve systems of equations',
                    'Apply algebra to real-world problems'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {nextLesson && (
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="mb-3">Continue Learning</h3>
                  <p className="text-muted-foreground mb-6">
                    Pick up where you left off with your next lesson
                  </p>
                  <Link to={`/course/${courseId}/lesson/${nextLesson.id}`}>
                    <Button size="lg">
                      Start: {nextLesson.title}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
