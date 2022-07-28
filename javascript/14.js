/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0] 
    let suffix = ""
    const compareStr = strs[0]
    for(let i = 0;i < compareStr.length; i++) {
        let s = compareStr[i]
        if(strs.every(item => item[i] === s)) {
            suffix += s
        } else {
            return suffix
        }
    }
    return suffix
};