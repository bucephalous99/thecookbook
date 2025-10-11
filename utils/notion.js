import { Client } from '@notionhq/client';

let notion = null;
let databaseId = null;

// Initialize Notion client if environment variables are available
try {
  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    databaseId = process.env.NOTION_DATABASE_ID;
  }
} catch (error) {
  console.error('Failed to initialize Notion client:', error);
}

export async function addBookingToNotion(bookingData) {
  try {
    // Check if Notion is properly initialized
    if (!notion || !databaseId) {
      throw new Error('Notion integration not configured');
    }

    // Input validation
    if (!bookingData.name || typeof bookingData.name !== 'string') {
      throw new Error('Invalid name');
    }
    if (!bookingData.email || typeof bookingData.email !== 'string' || !bookingData.email.includes('@')) {
      throw new Error('Invalid email');
    }
    if (!bookingData.preferredDate || !Date.parse(bookingData.preferredDate)) {
      throw new Error('Invalid date');
    }

    // Format date for Notion
    const date = new Date(bookingData.preferredDate).toISOString();

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Title type
        Name: {
          title: [
            {
              text: {
                content: bookingData.name.trim(),
              },
            },
          ],
        },
        // Email type
        Email: {
          email: bookingData.email.trim(),
        },
        // Phone type
        Phone: {
          phone_number: bookingData.phone ? bookingData.phone.trim() : null,
        },
        // Date type
        Date: {
          date: {
            start: date,
          },
        },
        // Text type
        Text: {
          rich_text: [
            {
              text: {
                content: bookingData.message ? bookingData.message.trim() : "",
              },
            },
          ],
        },
      },
    });

    return response;
  } catch (error) {
    console.error('Error in addBookingToNotion:', error);
    throw new Error(`Failed to create booking: ${error.message}`);
  }
}

export async function getBooking(pageId) {
  try {
    if (!notion) {
      throw new Error('Notion integration not configured');
    }
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error('Error in getBooking:', error);
    throw new Error(`Failed to retrieve booking: ${error.message}`);
  }
}