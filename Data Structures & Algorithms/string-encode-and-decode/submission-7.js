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
        let decoded = [];
        let i = 0;
        while (i < str.length) {
            let len = str[i];
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] !== "#") {
                    len += str[j];
                } else {
                    decoded.push(str.slice(j + 1, j + Number(len) + 1));
                    console.log("start", i, j, len);
                    i = j + Number(len) + 1;
                    console.log(i, j, len);
                    break;
                }
            }
        }
        return decoded;
    }
}
