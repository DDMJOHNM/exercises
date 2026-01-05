import { topKFrequent } from './topKFrequent';

describe('Is TopKFrequent Bucket Sort ' , () => {
       
    test('k=2, [1,2,2,3,3,3]', () => {
         expect(topKFrequent([1,2,2,3,3,3], 2)).toStrictEqual([3,2]);
    });

    //  test('k=5, [,32,77,25,61,89]', () => {
    //      expect(topKFrequent([42,32,77,25,61,89], 5)).toStrictEqual([25,32,42,61,77,89]);
    // }); 
});


   //arr = [[3, 3], [2, 1], [1, 2]]
   //eg k = 2
   //return [3,1]