import { describe, it, expect } from "bun:test";
import { sendHeartbeat } from "./HttpHeartbeat";

describe("HttpHeartbeat", () => {
  it("should send a heartbeat successfully", async () => {
    const url = 'https://www.postb.in/1723893448002-7660356266424';
    const data = { test: "data" };

    const response = await sendHeartbeat(url, data);
    expect(response.ok).toBe(true);
  });
});

