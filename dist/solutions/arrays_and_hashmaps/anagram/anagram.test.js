"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Anagram } = require('./anagram');
describe('Is Anangram', () => {
    const solution = new Anagram();
    test('returns false if input string lenegths not the same ', () => {
        expect(solution.isAnagram("raceycar", "racecar")).toBe(false);
    });
    test('Solution must contain the same characters', () => {
        expect(solution.isAnagram("raceycar", "ractcar")).toBe(false);
    });
});
//# sourceMappingURL=anagram.test.js.map