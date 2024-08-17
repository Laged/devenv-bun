import { describe, it, expect } from "bun:test";
import { readFromFile, parseToJson } from "./FileReader";

describe("FileReader", () => {
  const mockData = `
NAME=NixOS
VERSION="24.05 (Uakari)"
ID=nixos
PRETTY_NAME="NixOS 24.05 (Uakari)"
VERSION_ID="24.05"
`;

  it("should parse the mock data correctly", () => {
    const jsonOutput = parseToJson(mockData);
    expect(jsonOutput.NAME).toBe("NixOS");
    expect(jsonOutput.VERSION).toBe("24.05 (Uakari)");
  });

  it("should find at least a VERSION field in the actual file", async () => {
    const filePath = '/etc/os-release';
    const fileContents = await readFromFile(filePath);
    const jsonOutput = parseToJson(fileContents);
    expect(jsonOutput.VERSION).toBeDefined();
  });
});

