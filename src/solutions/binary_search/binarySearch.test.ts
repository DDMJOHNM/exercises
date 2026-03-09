import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    test('should return 0 for [-1,0,2,4,6,8] and target 4', () => {
        expect(binarySearch([-1,0,2,4,6,8],4)).toBe(4);
    });
5
    test('should return -1 for [-1,0,2,4,6,8] and target 3', () => {
        expect(binarySearch([-1,0,2,4,6,8],3)).toBe(-1);
    });
});