class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedNums = nums.sort((a, b) => a - b);

        if (nums.length === 0) return 0;
        let longest = 1;
        let temp = 1;

        for (let i = 1; i < nums.length; i++) {
            if (sortedNums[i - 1] === sortedNums[i] - 1) {
                temp++;
                if (temp > longest) {
                    longest = temp;
                }
            } else if (sortedNums[i - 1] === sortedNums[i]) {
                continue;
            } else {
                temp = 1;
            }
        }
        return longest;
    }
}
