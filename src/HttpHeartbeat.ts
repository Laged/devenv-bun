import { fetch } from "bun";

export async function sendHeartbeat(url: string, data: Record<string, string>): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Failed to send heartbeat: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending heartbeat:', error);
    throw error;
  }
}

