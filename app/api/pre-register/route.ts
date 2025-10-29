import { NextResponse } from 'next/server';
import { addBookingToNotion } from '../../../utils/notion';

export async function POST(request: Request) {
  try {
    // Check environment variables before processing
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.error('Missing required environment variables:', {
        hasNotionToken: !!process.env.NOTION_TOKEN,
        hasDatabaseId: !!process.env.NOTION_DATABASE_ID,
      });

      return NextResponse.json(
        {
          error: 'Pre-registration system is currently unavailable',
          details: 'Configuration error'
        },
        { status: 503 }
      );
    }

    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email'];
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

    // Add pre-registration to Notion database
    const notionResponse = await addBookingToNotion({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      preferredDate: data.preferredDate || new Date('2026-01-05').toISOString(),
      message: data.message || 'Pre-registro para lanzamiento'
    });

    // Log success
    console.log('Pre-registration created successfully:', {
      id: notionResponse.id,
      name: data.name,
      email: data.email,
      date: new Date().toISOString()
    });

    return NextResponse.json(
      {
        message: 'Pre-registration successful',
        id: notionResponse.id,
        url: notionResponse.url
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Log the error with context
    console.error('Error processing pre-registration:', {
      error: error.message,
      stack: error.stack,
    });

    // Handle different types of errors
    if (error.message.includes('not configured')) {
      return NextResponse.json(
        {
          error: 'Pre-registration system is temporarily unavailable',
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
        error: isValidationError ? error.message : 'Failed to process pre-registration',
        details: isValidationError ? null : 'An unexpected error occurred'
      },
      { status: isValidationError ? 400 : 500 }
    );
  }
}
