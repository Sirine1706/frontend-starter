
import { removeDuplicates, removeAtIndex, insertAtIndex } from '../../src/utils/array';


describe("Array utils functions", () => {
    it("It should remove duplicates from an array!", () => {
        const array = [1, 1, 1, 2]
        const result = removeDuplicates(array)
        expect(result).toEqual([1, 2])
    })
    it("should remove an item from an array at a given index", () => {
        const array = [1, 2, 3, 4, 5];
        const result = removeAtIndex(array as number[], 2)
        expect(result).toEqual([1, 2, 4, 5])
    })
    it("should insert an item into an array at a given index", () => {
        const array = [1, 2, 3, 4, 5];
        const result = insertAtIndex(array as number[], 2, 10)
        expect(result).toEqual([1, 2, 10, 3, 4, 5])
    })
})