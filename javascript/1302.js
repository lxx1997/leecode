
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    const rootFlat = flatRoot([[root]])
    let arr = rootFlat[rootFlat.length - 1]
    return arr.reduce((total, item) => total += item.val, 0)
};
var flatRoot = (arr) => {
    let root = arr[arr.length - 1], newArr = []
    for(let i = 0; i < root.length; i++) {
        let item = root[i] 
        item.left && newArr.push(item.left) 
        item.right && newArr.push(item.right) 
    }
    if(newArr.length === 0) return arr
    arr.push(newArr)
    return flatRoot(arr)
}