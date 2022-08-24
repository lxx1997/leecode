/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    if(dividend === 0) return 0
    let flag = 1
    if((dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0)) {
        flag = 1
    } else {
        flag = -1
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if(dividend < divisor) return 0
    let pow = 0, res = 0
    while(pow <= 32) {
        if(dividend / Math.pow(2, pow) < divisor) {
            res += Math.pow(2, pow - 1)
            dividend -= Math.pow(2, pow - 1) * divisor
            if(dividend < divisor) break;
            pow = 0
        } else {
            pow++
        }
    }
    if(flag > 0) {
        return res > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : res
    }
    if (flag < 0) {
        return res > Math.pow(2, 31) ? Math.pow(2, 31) - 1 : -res
    }
};