import { is2DMatrix } from "./2DMatrix";

describe('is2DMatrix', () => {
    test('should return true for a valid 2D matrix', () => {
        expect(is2DMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10)).toBe(true);
    });

    test('should return false when target is not in matrix', () => {
        expect(is2DMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15)).toBe(false);
    });
});
