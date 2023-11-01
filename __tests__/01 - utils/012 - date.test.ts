import {
  isDateValid,
  formatDate,
  getTimeAndReturnDifferenceInSeconds,
  convertSecondsToMMSS,
} from "../../src/utils/date";

describe("Date utils functions", () => {
  it("It should return false if date is invalid", () => {
    const date = new Date("invalid date");
    const result = isDateValid(date);
    expect(result).toBe(false);
  });
  it("It should return true if date is valid", () => {
    const date = new Date();
    const result = isDateValid(date);
    expect(result).toBe(true);
  });

  it("It should return the difference in seconds between two dates", () => {
    const date = new Date("2020-01-01");
    const result = getTimeAndReturnDifferenceInSeconds(date.toISOString());
    expect(result).toBeGreaterThan(0);
  });
  it("It should convert seconds to minutes and seconds", () => {
    const seconds = 125;
    const result = convertSecondsToMMSS(seconds);
    expect(result).toEqual("2:5");
  });
});
