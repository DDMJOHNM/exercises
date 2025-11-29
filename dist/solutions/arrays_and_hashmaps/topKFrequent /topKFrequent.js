"use strict";
//bucket sort 
//linear time 
//size of input array
//all six values occur once
//memeory complexity O(n)
Object.defineProperty(exports, "__esModule", { value: true });
exports.topKFrequent = topKFrequent;
function topKFrequent(nums, k) {
    //frequency map
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    //convert to array of tuples
    const arr = Object.entries(count).map(([num, freq]) => [Number(freq), parseInt(num)]);
    //most frequent first
    arr.sort((a, b) => b[0] - a[0]);
    //pair 1 extract second element of tuple
    //keep only the first k entries
    //arr = [[3, 3], [2, 1], [1, 2]]
    //eg k = 2
    //return [3,1]
    //arr.slice(0, k)
    return arr.slice(0, k).map((pair) => pair[1]);
}
https: ; //neetcode.io/problems/top-k-elements-in-list/solution
//# sourceMappingURL=topKFrequent.js.map