/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if(nums.length === 4) {
        if(nums.reduce((total, item) => total += item) === target) {
            return [nums]
        } else {
            return []
        }
    }
    nums = nums.sort((a,b) => a-b)
    const arrHash = {}, arr = []
    for(let i = 0; i < nums.length - 3; i++) {
        let a = nums[i]
        for(let j = i+1; j < nums.length - 2; j++) {
            let b = nums[j]
            let l = j + 1, r =  nums.length - 1
            while(l < r) {
                const array = [a, b, nums[l], nums[r]]
                let total = a + b + nums[l] + nums[r]
                if(total > target) {
                    r--
                } else if(total < target) {
                    l++
                } else {
                    const str = array.join(",")
                    if(!arrHash[str]) {
                        arr.push(array)
                        arrHash[str] = true
                    }
                    r--
                    l++
                }
            }
        }
    }
    return arr
};