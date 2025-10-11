import { NextResponse } from 'next/server';
import { addBookingToNotion } from '../../../utils/notion';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.preferredDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add booking to Notion database
    const notionResponse = await addBookingToNotion(data);

    return NextResponse.json(
      { message: 'Booking created successfully', id: notionResponse.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}