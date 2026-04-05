/**
 * NeuroNova API Service Layer
 * This layer handles all communication between the frontend and the backend.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface Course {
  id: string;
  title: string;
  description: string;
  theme: string;
  difficulty: string;
  materials?: string[];
}

export interface StudentEngagement {
  courseId: string;
  totalStudents: number;
  completionRate: number;
  engagementTrend: { day: string; active: number }[];
}

export const apiService = {
  /**
   * COURSE MANAGEMENT
   */
  
  // Create a new course and trigger backend processing
  async createCourse(courseData: FormData): Promise<Course> {
    const response = await fetch(`${BASE_URL}/courses`, {
      method: 'POST',
      body: courseData, // FormData handles file uploads automatically
    });
    if (!response.ok) throw new Error('Failed to create course');
    return response.json();
  },

  // Get all courses for a teacher
  async getTeacherCourses(): Promise<Course[]> {
    const response = await fetch(`${BASE_URL}/teacher/courses`);
    if (!response.ok) throw new Error('Failed to fetch courses');
    return response.json();
  },

  // Get specific course details with adapted content
  async getCourseById(id: string): Promise<Course> {
    const response = await fetch(`${BASE_URL}/courses/${id}`);
    if (!response.ok) throw new Error('Failed to fetch course details');
    return response.json();
  },

  /**
   * ANALYTICS & ENGAGEMENT
   */

  // Get engagement data for a specific course or overall
  async getEngagementData(courseId?: string): Promise<StudentEngagement> {
    const url = courseId 
      ? `${BASE_URL}/analytics/engagement/${courseId}`
      : `${BASE_URL}/analytics/engagement/summary`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch engagement data');
    return response.json();
  },

  /**
   * LEARNER SIDE
   */

  // Enroll in a course
  async enrollInCourse(courseId: string): Promise<{ success: boolean }> {
    const response = await fetch(`${BASE_URL}/enrollments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId }),
    });
    if (!response.ok) throw new Error('Enrollment failed');
    return response.json();
  },
  
  // Get student progress
  async getStudentProgress(): Promise<any> {
    const response = await fetch(`${BASE_URL}/student/progress`);
    if (!response.ok) throw new Error('Failed to fetch progress');
    return response.json();
  }
};
