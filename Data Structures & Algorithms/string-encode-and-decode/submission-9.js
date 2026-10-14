class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += `${str.length}#${str}`;
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let separator = str.indexOf("#", i);
            let len = str.slice(i, separator);
            let end = Number(len) + separator + 1;
            result.push(str.slice(separator + 1, end));
            i=end
        }
        return result
    }
}

