class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0)) ||
            (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0))
        );
    }

    isPalindrome(s) {
        let str = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;
        while (left <= right) {
            if (right > 0 && !this.isAlphaNumeric(str[right])) {
                right--;
                continue;
            }
            if (!this.isAlphaNumeric(str[left])) {
                left++;
                continue;
            }
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
