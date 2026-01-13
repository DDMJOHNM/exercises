import { isValidPalindrome } from './validPalindrome';

describe('isValidPalindrome', () => {
    test('should return true for a valid palindrome', () => {
        console.log('isValidPalindrome', isValidPalindrome('Was it a car or a cat I saw?')); 
        expect(isValidPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });
});
