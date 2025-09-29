class Dups {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        let hm = new Map()
        for (var i=0; i < nums.length; i++){   
            if(hm.has(nums[i])){
                return true
            }
            hm.set(nums[i], true)
        }  
        return false
    }
}

module.exports = { Dups };