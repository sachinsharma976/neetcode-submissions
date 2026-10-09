class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (const str of strs) {
            const arr = new Array(26).fill(0);
            for (const char of str) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            if (map.hasOwnProperty(arr)) {
                map[arr].push(str);
            } else {
                map[arr] = [str];
            }
        }
        return Object.values(map)
    }
}
