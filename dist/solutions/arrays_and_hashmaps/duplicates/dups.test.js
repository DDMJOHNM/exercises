"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Dups } = require('./dups');
describe('Contains Duplicate', () => {
    const solution = new Dups();
    test('array with no duplicates should return false', () => {
        expect(solution.hasDuplicate([1, 2, 3, 4])).toBe(false);
    });
    test('array with duplicates should return true', () => {
        expect(solution.hasDuplicate([1, 2, 3, 3])).toBe(true);
    });
    test('empty array should return false', () => {
        expect(solution.hasDuplicate([])).toBe(false);
    });
    test('array with multiple duplicates should return true', () => {
        expect(solution.hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
});
//# sourceMappingURL=dups.test.js.map