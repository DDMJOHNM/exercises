"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dups {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hm = new Map();
        for (var i = 0; i < nums.length; i++) {
            if (hm.has(nums[i])) {
                return true;
            }
            hm.set(nums[i], true);
        }
        return false;
    }
}
module.exports = { Dups };
//# sourceMappingURL=dups.js.map