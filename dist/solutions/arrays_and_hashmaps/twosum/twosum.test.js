"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twosum_1 = require("./twosum");
describe('Is Two Sum', () => {
    test('Indices 0-1', () => {
        expect((0, twosum_1.isTwoSum)([3, 4, 5, 6], 7)).toStrictEqual([0, 1]);
    });
    test('Indices 0-2', () => {
        expect((0, twosum_1.isTwoSum)([4, 5, 6], 10)).toStrictEqual([0, 2]);
    });
    test('Indices 0-1', () => {
        expect((0, twosum_1.isTwoSum)([5, 5], 10)).toStrictEqual([0, 1]);
    });
});
//# sourceMappingURL=twosum.test.js.map