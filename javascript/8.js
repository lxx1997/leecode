/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let symbol = true, numList = new Array(10).fill(0).map((item,index) => index + ""), all = ["+", "-"].concat(numList)
    s = s.trim()
    for(let i = 0; i < s.length; i++) {
        if(all.includes(s[i])) {
            if(s[i] === "+") {
                s = s.slice(i + 1)
            } else if(s[i] === "-") {
                s = s.slice(i + 1)
                symbol = false
            } else {
                s = s.slice(i)
            }
            break
        } else {
            return 0
        }
    }
    if(!numList.includes(s[0])) return 0
    let ns = "" 
    for(let i = 0; i < s.length; i++) {
        if (numList.includes(s[i])) {
            ns +=s[i]
        } else {
            if(s.length) {
                break;
            }
        }
    }
    if(symbol) return Math.min(+ns, Math.pow(2, 31) - 1)
    return Math.max(-Number(ns), -Math.pow(2, 31))
};
console.log(myAtoi(s = "42"), 42)
console.log(myAtoi(s = "   -42"), -42)
console.log(myAtoi(s = "4193 with words"), 4193)
console.log(myAtoi(s = "with words"), 4193)
console.log(myAtoi("-+12"), 0)
console.log(myAtoi("sdfasdfasdf dfs453"), 0)