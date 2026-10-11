class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const results = [];
        let productLeft = 1;
        let productRight = 1;
        for (let i = 0; i < nums.length; i++) {
            results[i] = productLeft
            productLeft *= nums[i]
        }
        for (let j = nums.length - 1; j >= 0; j--) {
            results[j] *= productRight
            productRight *= nums[j]
        }
        return results;
    }
}
