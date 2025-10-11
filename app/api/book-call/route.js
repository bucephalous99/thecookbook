import { NextResponse } from 'next/server';
import { addBookingToNotion } from '../../../utils/notion';

export async function POST(request) {
  try {
    // Check environment variables before processing
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.error('Missing required environment variables:', {
        hasNotionKey: !!process.env.NOTION_API_KEY,
        hasDatabaseId: !!process.env.NOTION_DATABASE_ID,
      });

      return NextResponse.json(
        {
          error: 'Booking system is currently unavailable',
          details: 'Configuration error'
        },
        { status: 503 }
      );
    }

    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'preferredDate'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          fields: missingFields
        },
        { status: 400 }
      );
    }

    // Additional validation
    if (!data.email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!Date.parse(data.preferredDate)) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    // Add booking to Notion database
    const notionResponse = await addBookingToNotion(data);

    // Log success
    console.log('Booking created successfully:', {
      id: notionResponse.id,
      name: data.name,
      email: data.email,
      date: new Date().toISOString()
    });

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        id: notionResponse.id,
        url: notionResponse.url
      },
      { status: 201 }
    );
  } catch (error) {
    // Log the error with context
    console.error('Error processing booking:', {
      error: error.message,
      stack: error.stack,
      data: request.body ? 'Present' : 'Missing'
    });

    // Handle different types of errors
    if (error.message.includes('not configured')) {
      return NextResponse.json(
        {
          error: 'Booking system is temporarily unavailable',
          details: 'Integration error'
        },
        { status: 503 }
      );
    }

    // Determine if it's a validation error or server error
    const isValidationError = error.message.includes('Invalid') ||
                            error.message.includes('required') ||
                            error.message.includes('format');

    return NextResponse.json(
      {
        error: isValidationError ? error.message : 'Failed to process booking',
        details: isValidationError ? null : 'An unexpected error occurred'
      },
      { status: isValidationError ? 400 : 500 }
    );
  }
}