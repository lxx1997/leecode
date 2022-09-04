/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let length = arr.length
    let left = 0, right = 0
    if(arr[left] >= x) return arr.slice(0, k)
    if(arr[length - 1] <= x) return arr.slice(length - k, length)
    while(right < length) {
        if(arr[right] <= x) {
            if(right - left >= k) {
                left++
            }
            right++
        } else {
            if(arr[right] - x >= x - arr[left]) {
                if(right - left >= k) {
                    break;
                } else {
                    right++
                }
            } else {
                if(right - left >= k) {
                    right++
                    left++
                } else {
                    right++
                }
            }
        }
    }
    return arr.slice(left, right)
};
console.log(findClosestElements([1,2,3,4,5],4,3), [1,2,3,4])