import { readFromFile, parseToJson } from "./FileReader";
import { sendHeartbeat } from "./HttpHeartbeat";

async function main() {
  const filePath = '/etc/os-release';
  const heartbeatUrl = 'https://www.postb.in/1723893448002-7660356266424';

  try {
    // Read the OS release file
    const fileContents = await readFromFile(filePath);
    
    // Parse the file contents to JSON
    const jsonOutput = parseToJson(fileContents);
    
    // Send the heartbeat
    const response = await sendHeartbeat(heartbeatUrl, jsonOutput);

    if (response.ok) {
      console.log('Heartbeat sent successfully!');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
