class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicate = {};
        for (let i of nums){
            if(duplicate.hasOwnProperty(i)){
                return true;
            }else{
                duplicate[i] = 1
            }
        }
        return false
    }
}
