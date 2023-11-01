import { validateEmail, validateUrl, isEmptyObject } from '../../src/utils/global';


describe("Global utils functions", () => {
    it("It should validate an email", () => {
        const email = "";
        const result = validateEmail(email);
        expect(result).toBe(false);
    })

    it("It should validate an email", () => {
        const email = "selmi@gmail.com";
        const result = validateEmail(email);
        expect(result).toBe(true);
    })

    it("It should validate a url", () => {
        const url = "";
        const result = validateUrl(url);
        expect(result).toBe(false);
    })

    it("It should validate a url", () => {
        const url = "https://google.com";
        const result = validateUrl(url);
        expect(result).toBe(true);
    })

    it("It should validate an empty object", () => {
        const obj = {};
        const result = isEmptyObject(obj);
        expect(result).toBe(true);
    })
})

