/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false
    let numHash = {}
    for(let i = 0; i < hand.length; i++) {
        console.log(hand[i])
        if(!numHash[hand[i]]) {
            numHash[hand[i]] = 1
        } else {
            numHash[hand[i]]++
        }
    }
    let nums = Object.keys(numHash)
    console.log(nums)
    for(let i = 0; i < nums.length; i++) {
        let key = Number(nums[i])
        while(numHash[key]) {
            // if(!numHash[key] || !numHash[key+1] || !numHash[key+2]) {
            //     return false
            // }
            // --numHash[key]
            // --numHash[key+1]
            // --numHash[key+2]
            let flag = true, size = 0
            while(size < groupSize) {
                if(!numHash[key + size]) {
                    flag = false
                    return false
                } else {
                    flag = true
                    --numHash[key + size]
                }
                size++
            }
        }
    }
    return true
};

console.log(isNStraightHand([6,8,9], 3))
console.log(isNStraightHand([1], 1))