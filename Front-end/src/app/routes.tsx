import { createBrowserRouter } from 'react-router';
import { Landing } from '@pages/Landing';
import { Dashboard } from '@pages/Dashboard';
import { CourseDetail } from '@pages/CourseDetail';
import { LessonViewer } from '@pages/LessonViewer';
import { TeacherDashboard } from '@pages/TeacherDashboard';
import { AddCourse } from '@pages/AddCourse';
import { CourseManagement } from '@pages/CourseManagement';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/course/:courseId',
    element: <CourseDetail />,
  },
  {
    path: '/course/:courseId/lesson/:lessonId',
    element: <LessonViewer />,
  },
  {
    path: '/teacher',
    children: [
      {
        path: '',
        element: <TeacherDashboard />,
      },
      {
        path: 'dashboard',
        element: <TeacherDashboard />,
      },
      {
        path: 'add-course',
        element: <AddCourse />,
      },
      {
        path: 'courses',
        element: <CourseManagement />,
      },
    ],
  },
]);
