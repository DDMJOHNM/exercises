"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topKFrequent_1 = require("./topKFrequent");
describe('Is Two Sum', () => {
    test('k=2, [3,3,3,2,1,1]', () => {
        expect((0, topKFrequent_1.topKFrequent)([3, 3, 3, 2, 1, 1], 2)).toStrictEqual([3, 1]);
    });
});
//arr = [[3, 3], [2, 1], [1, 2]]
//eg k = 2
//return [3,1]
//# sourceMappingURL=topKFrequent.test.js.map