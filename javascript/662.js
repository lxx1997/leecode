var widthOfBinaryTree = function(root) {
    if(!root.left && !root.right) return 1
    return flatRoot([[root, 1n]])
};


var flatRoot = (arr, max = 0n) => {
    let newArr = []
    if(max < arr[arr.length - 1][1] - arr[0][1] + 1n) {
        max = arr[arr.length - 1][1] - arr[0][1] + 1n
    }
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i]
        item[0].left && newArr.push([item[0].left, item[1] * 2n]) 
        item[0].right && newArr.push([item[0].right, item[1] * 2n + 1n]) 
    }
    if(newArr.length === 0) return max
    return flatRoot(newArr, max)
}