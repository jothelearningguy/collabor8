import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for tutor application
const tutorApplicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  university: z.string().min(2, 'University name must be at least 2 characters'),
  subjects: z.array(z.string()).min(1, 'At least one subject is required'),
  transcript: z.string().url('Invalid transcript URL'),
});

type TutorApplication = z.infer<typeof tutorApplicationSchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData: TutorApplication = tutorApplicationSchema.parse(body);
    
    // TODO: Store the application in a database
    // For now, we'll just return a success response
    
    return NextResponse.json({
      success: true,
      message: 'Application received successfully',
      data: validatedData,
    }, { status: 201 });
    
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      }, { status: 400 });
    }
    
    console.error('Error processing tutor application:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}

interface Tutor {
  id: number;
  name: string;
  university: string;
  subjects: string[];
  rating: number;
  hourlyRate: number;
  videoUrl: string;
}

interface TutorsResponse {
  success: boolean;
  data: {
    tutors: Tutor[];
    total: number;
    page: number;
    perPage: number;
  };
}

export async function GET(): Promise<NextResponse<TutorsResponse>> {
  // TODO: Implement fetching tutors with filtering and pagination
  return NextResponse.json({
    success: true,
    data: {
      tutors: [
        {
          id: 1,
          name: 'John Doe',
          university: 'UNC Chapel Hill',
          subjects: ['Chemistry', 'Physics'],
          rating: 4.8,
          hourlyRate: 30,
          videoUrl: 'https://example.com/video1',
        },
      ],
      total: 1,
      page: 1,
      perPage: 10,
    },
  });
} 