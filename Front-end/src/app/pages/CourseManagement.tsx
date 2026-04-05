import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  BarChart2, 
  Plus, 
  Users, 
  BookOpen, 
  ChevronRight,
  ExternalLink,
  Settings
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '../components/ui/dropdown-menu';

const courses = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    students: 45,
    lessons: 12,
    status: 'Published',
    lastUpdated: '2 days ago',
    completionRate: '72%'
  },
  {
    id: '2',
    title: 'World History: Ancient Civilizations',
    students: 32,
    lessons: 15,
    status: 'Published',
    lastUpdated: '5 days ago',
    completionRate: '58%'
  },
  {
    id: '3',
    title: 'Biology Basics',
    students: 28,
    lessons: 10,
    status: 'Draft',
    lastUpdated: '1 week ago',
    completionRate: 'N/A'
  },
  {
    id: '4',
    title: 'Creative Writing Workshop',
    students: 15,
    lessons: 8,
    status: 'Published',
    lastUpdated: '3 days ago',
    completionRate: '40%'
  },
  {
    id: '5',
    title: 'Introduction to Programming',
    students: 50,
    lessons: 20,
    status: 'Published',
    lastUpdated: 'Today',
    completionRate: '65%'
  }
];

export function CourseManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-medium mb-3">Course Management</h1>
            <p className="text-xl text-muted-foreground">
              Manage your existing courses and track their performance
            </p>
          </div>
          <Button onClick={() => window.location.href = '/teacher/add-course'} className="flex gap-2">
            <Plus className="w-4 h-4" /> Create New Course
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search courses..." />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </div>

        {/* Course List */}
        <div className="space-y-4">
          {courses.map(course => (
            <Card key={course.id} className="hover:border-primary/50 transition-colors group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center p-6 gap-6">
                  {/* Course Thumbnail Placeholder */}
                  <div className="w-full md:w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen className="w-8 h-8 text-primary/40" />
                  </div>

                  {/* Course Details */}
                  <div className="flex-1 space-y-1 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-1">
                      <h3 className="text-xl font-medium">{course.title}</h3>
                      <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {course.students} Students
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" /> {course.lessons} Lessons
                      </span>
                      <span>Last updated {course.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="hidden lg:flex gap-8 px-8 border-x">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Completion Rate</div>
                      <div className="text-lg font-bold">{course.completionRate}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hidden sm:flex gap-2"
                      onClick={() => window.location.href = `/teacher/analytics/${course.id}`}
                    >
                      <BarChart2 className="w-4 h-4" /> Analytics
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hidden sm:flex gap-2"
                    >
                      <Edit className="w-4 h-4" /> Edit
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex gap-2 sm:hidden">
                          <BarChart2 className="w-4 h-4" /> Analytics
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2 sm:hidden">
                          <Edit className="w-4 h-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                          <ExternalLink className="w-4 h-4" /> View Public Page
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                          <Settings className="w-4 h-4" /> Course Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-2 text-destructive focus:text-destructive">
                          <Trash2 className="w-4 h-4" /> Delete Course
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <Button variant="ghost" size="icon" className="group-hover:translate-x-1 transition-transform">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination or Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">Load More Courses</Button>
        </div>
      </main>
    </div>
  );
}
