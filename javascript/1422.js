/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let one = 0, zero = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "1") one++
    }
    let max = 0
    
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === "1") {
            one--
        } else {
            zero++
        }
        max = Math.max(max, zero + one)
    }
    return max
};