import { describe, expect, it } from "vitest";
import wait from "../utils/wait";

describe("wait function", () => {
  it("带 ms 参数", async () => {
    const start = Date.now();
    const ms = 2000;
    await wait(ms);
    const end = Date.now();
    const elapsed = end - start;
    expect(elapsed).toBeGreaterThanOrEqual(ms);
  });

  it("不带 ms 参数", async () => {
    const start = Date.now();
    await wait();
    const end = Date.now();
    const elapsed = end - start;
    expect(elapsed).toBeGreaterThanOrEqual(1000);
  });
});
