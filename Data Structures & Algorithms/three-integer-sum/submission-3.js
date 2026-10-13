class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const map = {};
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            if (sorted[i] === sorted[i - 1]) continue;
            if (sorted[i] > 0) break;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];
                if (sum === 0) {
                    result.push([sorted[left], sorted[right], sorted[i]]);
                    left++;
                    right--;
                    while (left < right) {
                        if (sorted[left-1] === sorted[left ]) {
                            left++;
                        } else {
                            break;
                        }
                    }
                    while (right > left) {
                        if (sorted[right+1] === sorted[right]) {
                            right--;
                        } else {
                            break;
                        }
                    }
                    continue;
                }
                if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}
