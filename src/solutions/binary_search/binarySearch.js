"use strict";
//0 log n time complexity
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
function binarySearch(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
            console.log(left + "left");
        }
        else if (nums[mid] > target) {
            right = mid - 1;
            console.log(right + "right");
        }
        else {
            console.log(mid + "mid");
            return mid;
        }
    }
    return -1;
}
