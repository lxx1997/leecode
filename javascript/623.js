var addOneRow = function(root, val, depth) {
    let rootRow = flatRoot([[root]])
    if(depth === 1) {
        let r = { val: val, left: root, right: null}
        return r
    }
    let row = rootRow[depth - 2]
    for(let i = 0; i < row.length; i++) {
        let item = row[i]
        let { left, right } = item
        let l = { val, left: null, right: null}, r = { val, left: null, right: null }
        if(left && right) {
            l.left = left
            r.right = right
        } else if(left && !right) {
            l.left = left
        } else if(!left && right) {
            r.right = right
        }
        item.left = l
        item.right = r
    }
    return root
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