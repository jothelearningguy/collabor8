import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically set up email sending using a service like SendGrid or NodeMailer
    // For now, we'll just log the data and return a success response
    console.log('Form submission to jo@heallyhub.com:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 