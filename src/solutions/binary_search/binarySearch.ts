//0 log n time complexity

export function binarySearch(nums: number[], target: number): number {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid]! < target) {
            left = mid + 1;
            console.log(left + "left");
        }
        else if (nums[mid]! > target) {
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
