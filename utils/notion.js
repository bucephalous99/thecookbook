import { Client } from '@notionhq/client';

let notion = null;
let databaseId = null;

// Initialize Notion client if environment variables are available
try {
  if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
    notion = new Client({
      auth: process.env.NOTION_API_KEY,
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
      throw new Error('Invalid preferred date');
    }

    // Format date for Notion
    const preferredDate = new Date(bookingData.preferredDate).toISOString();

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: bookingData.name.trim(),
              },
            },
          ],
        },
        Email: {
          email: bookingData.email.trim(),
        },
        "Phone Number": {
          phone_number: bookingData.phone ? bookingData.phone.trim() : null,
        },
        "Preferred Date": {
          date: {
            start: preferredDate,
          },
        },
        Message: {
          rich_text: [
            {
              text: {
                content: bookingData.message ? bookingData.message.trim() : "",
              },
            },
          ],
        },
        Status: {
          select: {
            name: "New",
          },
        },
        "Created At": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return response;
  } catch (error) {
    console.error('Error in addBookingToNotion:', error);
    // Add more context to the error
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

export async function updateBookingStatus(pageId, status) {
  try {
    if (!notion) {
      throw new Error('Notion integration not configured');
    }
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        Status: {
          select: {
            name: status,
          },
        },
      },
    });
    return response;
  } catch (error) {
    console.error('Error in updateBookingStatus:', error);
    throw new Error(`Failed to update booking status: ${error.message}`);
  }
}