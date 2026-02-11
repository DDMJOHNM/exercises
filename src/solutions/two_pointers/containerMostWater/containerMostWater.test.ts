import { containerMostWater } from "./containerMostWater";

describe('containerMostWater', () => {
    test('should return 36 for [1,7,2,5,4,7,3,6]', () => {
        expect(containerMostWater([1,7,2,5,4,7,3,6])).toBe(36);
    });
});
