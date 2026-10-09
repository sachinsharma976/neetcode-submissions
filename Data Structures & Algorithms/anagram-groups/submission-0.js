class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        let results = [];
        for (const str of strs) {
            const arr = new Array(26).fill(0);
            for (const char of str) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            if (map.hasOwnProperty(arr)) {
                map[arr] = [...map[arr], str];
            } else {
                map[arr] = [str];
            }
        }
        for (const value of Object.values(map)) {
            results = [...results, value];
        }
        return results;
    }
}
