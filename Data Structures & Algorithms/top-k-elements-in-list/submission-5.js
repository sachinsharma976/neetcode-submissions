class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const bucket = [];
        const results = [];
        for (let num of nums) {
            if (map.hasOwnProperty(num)) {
                map[num]++;
            } else {
                map[num] = 1;
            }
        }
        for (let [key, value] of Object.entries(map)) {
            if (bucket[value - 1]) {
                bucket[value - 1].push(key);
            } else {
                bucket[value - 1] = [key];
            }
        }
        console.log(bucket)
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i] ) {
                results.push(...bucket[i]);
            }
        }
        console.log(results)
        return results.slice(0,k);
    }
}
