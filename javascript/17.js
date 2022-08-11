/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let defaultCode = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "qprs",
        "8": "tuv",
        "9": "wxyz"
    }, strs = []
    for(let i = 0; i < digits.length; i++) {
        let s = defaultCode[digits[i]]
        if(strs.length === 0) {
            strs = s.split("")
        } else {
            let newStr = []
            for(let j = 0; j < strs.length; j++) {
                newStr.push(...s.split("").map(item => strs[j] + item))
            }
            strs = newStr
        }
    }
    return strs
};

console.log(letterCombinations("23"))