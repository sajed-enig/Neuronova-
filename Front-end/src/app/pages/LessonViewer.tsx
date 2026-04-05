import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { LessonSidebar } from '../components/LessonSidebar';
import { Button } from '../components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Play, 
  Music, 
  FileText, 
  CheckCircle,
  Trophy,
  ArrowRight
} from 'lucide-react';

// Mock data
const courseData: Record<string, any> = {
  '1': {
    title: 'Magic Math: Algebra',
    lessons: [
      { id: 'l1', title: 'Understanding Variables and Constants', completed: true, locked: false },
      { id: 'l2', title: 'Basic Operations with Variables', completed: true, locked: false },
      { id: 'l3', title: 'Solving Linear Equations', completed: true, locked: false },
      { id: 'l4', title: 'Working with Inequalities', completed: false, locked: false },
      { id: 'l5', title: 'Introduction to Functions', completed: false, locked: false }
    ],
    assignment: {
      id: 'a1',
      title: 'The Great Algebra Challenge',
      description: 'Solve these real-world problems using everything you\'ve learned about variables, equations, and inequalities!',
      tasks: [
        'Create an inequality for a budget of $50 for a party.',
        'Solve for x: 3x - 7 = 14',
        'Explain when you should flip the inequality sign.'
      ]
    }
  }
};

const lessonContent: Record<string, any> = {
  'l4': {
    title: 'Working with Inequalities',
    reading: {
      content: `
        <h2 class="text-2xl font-bold mb-6 text-foreground">Understanding Inequalities</h2>
        
        <p class="mb-6 leading-relaxed text-muted-foreground">
          An inequality is a mathematical statement that compares two expressions. Unlike equations, 
          which show that two things are equal, inequalities show that one value is greater than, 
          less than, greater than or equal to, or less than or equal to another value.
        </p>
        
        <div class="bg-primary/5 rounded-2xl p-6 mb-8 border border-primary/20">
          <h3 class="text-xl font-bold mb-4 text-primary">Key Symbols</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 font-medium">
              <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border">&lt;</span>
              <span>means "less than"</span>
            </li>
            <li class="flex items-center gap-3 font-medium">
              <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border">&gt;</span>
              <span>means "greater than"</span>
            </li>
            <li class="flex items-center gap-3 font-medium">
              <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border">≤</span>
              <span>means "less than or equal to"</span>
            </li>
            <li class="flex items-center gap-3 font-medium">
              <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border">≥</span>
              <span>means "greater than or equal to"</span>
            </li>
          </ul>
        </div>
        
        <h3 class="text-xl font-bold mb-4 text-foreground">Example: Solving an Inequality</h3>
        <div class="bg-card rounded-2xl p-6 mb-8 border border-border space-y-4 font-medium">
          <p class="text-muted-foreground">Solve: 2x + 3 &lt; 11</p>
          <div class="space-y-2">
            <p>1. Subtract 3: <span class="text-primary">2x &lt; 8</span></p>
            <p>2. Divide by 2: <span class="text-primary">x &lt; 4</span></p>
          </div>
        </div>
      `
    },
    video: {
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description: 'Watch this fun video to see how inequalities work in the real world!'
    },
    audio: {
      url: 'https://www.w3schools.com/html/horse.mp3',
      description: 'Listen to a quick summary of when to flip the inequality sign.'
    },
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'What does the symbol ≥ mean?',
          options: [
            'Greater than',
            'Less than',
            'Greater than or equal to',
            'Less than or equal to'
          ],
          correctAnswer: 2,
          type: 'single'
        }
      ]
    }
  }
};

export function LessonViewer() {
  const { courseId, lessonId } = useParams();
  const [activeFormat, setActiveFormat] = useState<'reading' | 'video' | 'audio' | 'quiz' | 'assignment'>('reading');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);
  
  const course = courseData[courseId || '1'];
  const lesson = lessonContent[lessonId || 'l4'];
  const currentLessonIndex = course.lessons.findIndex((l: any) => l.id === lessonId);
  const isLastLesson = currentLessonIndex === course.lessons.length - 1;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <Link to="/dashboard">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    );
  }
  
  const handleAnswerChange = (questionId: string, value: any) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <LessonSidebar 
          courseId={courseId || '1'}
          lessons={course.lessons}
          currentLessonId={lessonId}
        />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Link 
                  to={`/course/${courseId}`}
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to adventures
                </Link>
                {isLastLesson && (
                   <Badge className="bg-primary/10 text-primary border-none font-bold">Final Lesson!</Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">{lesson.title}</h1>
            </div>
            
            {/* Format Selector */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-muted rounded-2xl inline-flex border border-border">
              <button
                onClick={() => setActiveFormat('reading')}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeFormat === 'reading' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="w-4 h-4" /> Read
              </button>
              {lesson.video && (
                <button
                  onClick={() => setActiveFormat('video')}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeFormat === 'video' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Play className="w-4 h-4" /> Watch
                </button>
              )}
              {lesson.audio && (
                <button
                  onClick={() => setActiveFormat('audio')}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeFormat === 'audio' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Music className="w-4 h-4" /> Listen
                </button>
              )}
              <button
                onClick={() => setActiveFormat('quiz')}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeFormat === 'quiz' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <HelpCircle className="w-4 h-4" /> Quiz
              </button>
              {isLastLesson && (
                <button
                  onClick={() => setActiveFormat('assignment')}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeFormat === 'assignment' ? 'bg-primary text-white shadow-lg' : 'text-primary hover:bg-primary/5'
                  }`}
                >
                  <Trophy className="w-4 h-4" /> Final Assignment
                </button>
              )}
            </div>

            {/* Content Area */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm min-h-[400px] mb-8">
              {activeFormat === 'reading' && (
                <div 
                  className="prose prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: lesson.reading.content }}
                />
              )}

              {activeFormat === 'video' && (
                <div className="space-y-6">
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <video 
                      src={lesson.video.url} 
                      controls 
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-lg font-medium text-muted-foreground text-center">
                    {lesson.video.description}
                  </p>
                </div>
              )}

              {activeFormat === 'audio' && (
                <div className="flex flex-col items-center justify-center py-12 space-y-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music className="w-12 h-12 text-primary animate-pulse" />
                  </div>
                  <audio 
                    src={lesson.audio.url} 
                    controls 
                    className="w-full max-w-md"
                  />
                  <p className="text-lg font-medium text-muted-foreground text-center max-w-md">
                    {lesson.audio.description}
                  </p>
                </div>
              )}
              
              {activeFormat === 'quiz' && (
                <div className="space-y-8">
                   {lesson.quiz.questions.map((q: any) => (
                     <div key={q.id} className="space-y-4">
                        <h3 className="text-xl font-bold">{q.question}</h3>
                        <div className="grid gap-3">
                           {q.options.map((opt: string, idx: number) => (
                             <button 
                                key={idx}
                                onClick={() => handleAnswerChange(q.id, idx)}
                                className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                                  quizAnswers[q.id] === idx ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/50'
                                }`}
                             >
                                {opt}
                             </button>
                           ))}
                        </div>
                     </div>
                   ))}
                   <Button onClick={() => setShowResults(true)} className="w-full h-14 rounded-2xl font-bold text-lg">
                      Submit Quiz
                   </Button>
                   {showResults && (
                     <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200 text-center">
                        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                        <p className="text-green-700 font-bold">Quiz Submitted! You're doing great!</p>
                     </div>
                   )}
                </div>
              )}

              {activeFormat === 'assignment' && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">{course.assignment.title}</h2>
                    <p className="text-lg text-muted-foreground">{course.assignment.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {course.assignment.tasks.map((task: string, idx: number) => (
                      <div key={idx} className="p-6 rounded-2xl border border-border bg-muted/30">
                        <p className="font-bold mb-4">Task {idx + 1}: {task}</p>
                        <textarea 
                          className="w-full h-32 p-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none resize-none font-medium"
                          placeholder="Write your answer here..."
                        />
                      </div>
                    ))}
                  </div>

                  {!assignmentSubmitted ? (
                    <Button 
                      onClick={() => setAssignmentSubmitted(true)} 
                      className="w-full h-14 rounded-2xl font-bold text-lg"
                    >
                      Turn in Assignment
                    </Button>
                  ) : (
                    <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-200">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Assignment Turned In!</h3>
                      <p className="text-green-600 font-medium">Your teacher will review your work soon. Great job!</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
              <Button
                variant="ghost"
                className="flex items-center gap-2 font-bold"
                disabled={currentLessonIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" /> Previous Lesson
              </Button>
              
              {!isLastLesson ? (
                <Button
                  className="flex items-center gap-2 font-bold px-8 h-12 rounded-xl shadow-lg"
                >
                  Next Lesson <ChevronRight className="w-4 h-4" />
                </Button>
              ) : activeFormat !== 'assignment' ? (
                <Button
                  onClick={() => setActiveFormat('assignment')}
                  className="flex items-center gap-2 font-bold px-8 h-12 rounded-xl shadow-lg bg-primary text-white"
                >
                  Go to Assignment <ArrowRight className="w-4 h-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper components
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
