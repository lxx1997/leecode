/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    s = s.split("").filter(item => item === "(" || item === ")").join("")
    let left = 0, right = 0
    let deep = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            left++
        } else if(s[i] === ")") {
            if(left > 0) {
                left--
            }
        }
        deep = Math.max(deep, left)
    }
    return deep - left
};
console.log(maxDepth("((((1+(2*3)+((8)/4))))))))+1"), 3)