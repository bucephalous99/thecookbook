import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export async function addBookingToNotion(bookingData) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: bookingData.name,
              },
            },
          ],
        },
        Email: {
          email: bookingData.email,
        },
        "Phone Number": {
          phone_number: bookingData.phone || "",
        },
        "Preferred Date": {
          date: {
            start: bookingData.preferredDate,
          },
        },
        Message: {
          rich_text: [
            {
              text: {
                content: bookingData.message || "",
              },
            },
          ],
        },
        Status: {
          select: {
            name: "Pending",
          },
        },
      },
    });

    return response;
  } catch (error) {
    console.error('Error adding booking to Notion:', error);
    throw error;
  }
}