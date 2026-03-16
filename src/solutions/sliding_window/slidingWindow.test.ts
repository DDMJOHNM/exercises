import { slidingWindow } from './slidingWindow';

describe('slidingWindow', () => {
    test('should return true if s1 is a substring of s2', () => {
        expect(slidingWindow('abc', 'lecabee')).toBe(true);
    });

    test('should return false if s1 is not a substring of s2', () => {
        expect(slidingWindow('abc', 'lecaabee')).toBe(false);
    });

    test('should return true if s1 is a permutation of a substring of s2', () => {
        expect(slidingWindow('ab', 'eidbaooo')).toBe(true);
    });

});