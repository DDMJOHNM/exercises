"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTwoSum = isTwoSum;
function isTwoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] !== undefined && nums[j] !== undefined && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
