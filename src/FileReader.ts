import { promises as fs } from "fs";

export async function readFromFile(filePath: string): Promise<string> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    throw error;
  }
}

export function parseToJson(fileContents: string): Record<string, string> {
  const lines = fileContents.split('\n');
  const result: Record<string, string> = {};

  lines.forEach(line => {
    const [key, value] = line.split('=', 2);
    if (key) {
      result[key] = value ? value.replace(/"/g, '') : '';
    }
  });

  return result;
}

