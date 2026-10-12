class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map ={};
        for(let str of strs){
            const arr = new Array(26).fill(0);
            for(let j=0; j<str.length;j++){
                arr[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            if(map.hasOwnProperty(arr)){
                map[arr].push(str)
            }else{
                map[arr]=[str]
            }
        }
        return [...(Object.values(map))]
    }
}
