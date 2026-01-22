export function twoIntegerSumII(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const leftVal = nums[left]!;
        const rightVal = nums[right]!;
        if (leftVal + rightVal > target) {
            right--;
        } else if (leftVal + rightVal < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [-1, -1];
}   