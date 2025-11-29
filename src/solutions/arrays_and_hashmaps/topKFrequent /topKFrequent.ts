//bucket sort 
//linear time 
//size of input array
//all six values occur once
//memory complexity O(n)

// export function topKFrequent(nums: number[], k: number): unknown[] {
 
//     //frequency map
//     const count: any = {}
//     for (const num of nums) {
//         count[num] = (count[num] || 0) + 1
//     }

//     //convert to array of tuples
//     const arr: [number, number][] = Object.entries(count).map(
//         ([num, freq]) => [Number(freq), parseInt(num)]
//     );

//     //most frequent first
//     arr.sort((a, b) => b[0] - a[0]) 
    
//    //pair 1 extract second element of tuple
//    //keep only the first k entries
   
//    //arr = [[3, 3], [2, 1], [1, 2]]
//    //eg k = 2
//    //return [3,1]
//     //arr.slice(0, k)
//    return arr.slice(0, k).map((pair) => pair[1]);
   
// }

//try bucket sort 
//https://neetcode.io/problems/top-k-elements-in-list/solution
// When input data is uniformly distributed.
// When sorting floating-point numbers or decimal values.
// When dealing with large datasets and can leverage parallel processing.
// ❌ Avoid When:

// Data is highly skewed (non-uniform distribution).
// Memory is limited (extra space required for buckets).
// Elements range over a wide interval, making bucket allocation inefficient.

export function topKFrequent(nums: number[], k: number): Array<number> {
 
    if (nums.length === 0) return [];

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let bucketCount = Math.floor((max - min) / nums.length) + 1;
    let buckets: number[][] = Array.from({ length: bucketCount }, () => []);

    // distribute numbers into buckets; clamp index to valid range to avoid undefined
    nums.forEach((num) => {
        // compute raw index then clamp between 0 and bucketCount - 1
       let bucketIndex = Math.floor((num - min) / nums.length);
        if (!buckets[bucketIndex]) buckets[bucketIndex] = [];
        buckets[bucketIndex].push(num);
    });
        return buckets.reduce((sortedArr, bucket) => {
        return sortedArr.concat(bucket.sort((a, b) => a - b));        
    })   
}