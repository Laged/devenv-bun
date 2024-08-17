import { describe, it, expect } from "bun:test";
import { readFromFile, parseToJson } from "./FileReader";

// Mock data for testing
const mockData = `
NAME=NixOS
VERSION="24.05 (Uakari)"
ID=nixos
PRETTY_NAME="NixOS 24.05 (Uakari)"
VERSION_ID="24.05"
HOME_URL="https://nixos.org/"
DOCUMENTATION_URL="https://nixos.org/learn.html"
SUPPORT_URL="https://nixos.org/community.html"
BUG_REPORT_URL="https://github.com/NixOS/nixpkgs/issues"
LOGO="nix-snowflake"
`;

describe("OS Release Parser", () => {
  it("should parse the mock data correctly", () => {
    const jsonOutput = parseToJson(mockData);
    expect(jsonOutput.NAME).toBe("NixOS");
    expect(jsonOutput.VERSION).toBe("24.05 (Uakari)");
    expect(jsonOutput.PRETTY_NAME).toBe("NixOS 24.05 (Uakari)");
  });

  it("should find at least a VERSION field", async () => {
    const filePath = '/etc/os-release';
    const fileContents = await readFromFile(filePath);
    const jsonOutput = parseToJson(fileContents);
    expect(jsonOutput.VERSION).toBeDefined();
  });
});

