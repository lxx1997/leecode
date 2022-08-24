var constructMaximumBinaryTree = function(nums) {
    return converArray2Tree(nums, 0, nums.length - 1)
};

function converArray2Tree(nums, start, end) {
    if(end < start) return null
    let max = nums[start], maxIndex = start, root = {}
    for(let i = start; i <= end; i++) {
        if(nums[i] > max) {
            max = nums[i]
            maxIndex = i
        }
    }
    root.val = max
    root.left = converArray2Tree(nums, start, maxIndex - 1)
    root.right = converArray2Tree(nums, maxIndex + 1, end)
    return root
}