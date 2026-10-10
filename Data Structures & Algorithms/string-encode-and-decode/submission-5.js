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
        return encoded;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;
        while (i < str.length) {
            const separator = str.indexOf("#", i);
            const length = Number(str.slice(i,separator));
            const end  = separator + length + 1;
            decoded.push(str.slice(separator+1,end))
            i = end
        }
        return decoded;
    }
}
