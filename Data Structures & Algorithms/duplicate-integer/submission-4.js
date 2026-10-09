class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicate = new Map();
        for (let i of nums){
            if(duplicate.has(i)){
                return true;
            }else{
                duplicate.set(i,1)
            }
        }
        return false
    }
}
