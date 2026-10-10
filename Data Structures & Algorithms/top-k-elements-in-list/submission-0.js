class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const results = [];
        for (let num of nums) {
            if(map.hasOwnProperty(num)){
                map[num]++;
            }else{
                map[num] = 1;
            }
        }
        const sortedArr =Object.entries(map).sort((a,b)=>b[1] - a[1])
        for(let i = 0; i< k; i++){
            results.push(sortedArr[i][0]);
        }
        return results
    }
}
