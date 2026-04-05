import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from '../components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from 'recharts';
import { Users, BookOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const enrollmentData = [
  { name: 'Algebra', students: 45, completion: 72 },
  { name: 'History', students: 32, completion: 58 },
  { name: 'Biology', students: 28, completion: 85 },
  { name: 'Writing', students: 15, completion: 40 },
  { name: 'Coding', students: 50, completion: 65 },
];

const engagementData = [
  { day: 'Mon', active: 120 },
  { day: 'Tue', active: 150 },
  { day: 'Wed', active: 180 },
  { day: 'Thu', active: 140 },
  { day: 'Fri', active: 160 },
  { day: 'Sat', active: 90 },
  { day: 'Sun', active: 70 },
];

const chartConfig: ChartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--primary))",
  },
  completion: {
    label: "Completion %",
    color: "hsl(var(--chart-2))",
  },
  active: {
    label: "Active Students",
    color: "hsl(var(--chart-1))",
  }
};

export function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-medium mb-3">Teacher Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Monitor your courses and student performance
            </p>
          </div>
          <div className="flex gap-4">
            <Card className="px-4 py-2 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">170 Total Students</span>
              </div>
            </Card>
            <Card className="px-4 py-2 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">5 Active Courses</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
              <CheckCircle className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+5% since last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Time Spent/Lesson</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24m</div>
              <p className="text-xs text-muted-foreground">Consistent with average</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84%</div>
              <p className="text-xs text-muted-foreground">+12% peak engagement</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enrollment Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Course Enrollment & Completion</CardTitle>
              <CardDescription>Number of students and their progress per course</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="students" fill="var(--color-students)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completion" fill="var(--color-completion)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Daily Engagement Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Student Engagement Trend</CardTitle>
              <CardDescription>Daily active students across all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="var(--color-active)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-active)" }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
