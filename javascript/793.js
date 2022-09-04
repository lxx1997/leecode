/**
 * @param {number} k
 * @return {number}
 */
 var preimageSizeFZF = function(k) {
    if(k === 0) return 5
    let x = 5 * k
    let half = x >> 1, left = 0, right = x
    while(half < right && half > left) {
        let num = get5(half)
        if(num < k) {
            left = half
            half = Math.ceil((half + right) / 2)
        } else if(num === k) {
            return 5
        } else {
            right = half
            half = Math.ceil((half + left) / 2)
        }
    }
    if(half === left || half === right) {
        if(get5(half) === k) return 5
    }
    return 0
};

const get5 = (x) => {
    let num = Math.floor(x / 5)
    while(x) {
        x = Math.floor(x / 5)
        num += Math.floor(x / 5)
    }
    return num
}