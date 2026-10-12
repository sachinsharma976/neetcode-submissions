class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const set = new Set(nums);
        let longest = 1;
        let temp = 1;

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let k = nums[i] + 1;
                while (set.has(k)) {
                    temp++;
                    k++;
                }
                if (temp > longest) {
                    longest = temp;
                }
                temp = 1;
            }
        }
        return longest;
    }
}
