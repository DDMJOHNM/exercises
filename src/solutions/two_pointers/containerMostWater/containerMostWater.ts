export function containerMostWater(height: number[]): number {

    //heights[i] ith bar
    //2 bars can form a container
    //return the maximum area of water that can be contained
    //draw this out
    //max amount 7 
    let left = 0;
    let right = height.length - 1;
    let maxAmount = 0;
    while (left < right) {
        const leftVal = height[left]!;
        const rightVal = height[right]!;
        const currentArea = (right - left) * Math.min(leftVal, rightVal);
        maxAmount = Math.max(maxAmount, currentArea);
         if (leftVal < rightVal) {
            left++;
        } else {
            right--;
        }
    }
      return maxAmount;

}