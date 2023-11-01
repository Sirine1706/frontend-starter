import { makeReadableBytes } from '../../src/utils/units';

describe("Units utils functions", () => {
    it("It should convert bytes to readable units", () => {
        const bytes = 1024;
        const result = makeReadableBytes(bytes);
        expect(result).toEqual({"size": 1, "unit": "Kb"})
    })
})