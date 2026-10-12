class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const arr = [];
        const results = [];
        for (let str of strs) {
            arr.push(str.split("").sort().join(""));
        }
        for (let i = 0; i < strs.length; i++) {
            const s = arr[i];
            // console.log(map , s , strs[i])
            if (map.hasOwnProperty(s)) {
                map[s].push(strs[i]);
            } else {
                map[s] = [strs[i]];
            }
        }
        for (let values of Object.values(map)) {
            results.push(values);
        }

        return results;
    }
}
