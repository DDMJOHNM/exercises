import { isTwoSum } from './twosum';

describe('Is Two Sum', () => {
       
    test('Indices 0-1', () => {
         expect(isTwoSum([3,4,5,6], 7)).toStrictEqual([0,1]);
    });

    test('Indices 0-2', () => {
       expect(isTwoSum([4,5,6], 10)).toStrictEqual([0,2]);
    });

      test('Indices 0-1', () => {
       expect(isTwoSum([5,5], 10)).toStrictEqual([0,1]);
    });

});
