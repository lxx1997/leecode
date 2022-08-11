var maxLevelSum = function(root) {
    let rootArr = changeTreeToArray([[root]])
    let max = -Infinity, floor = 1
    for(let i = 0; i < rootArr.length; i++) {
        let sum = getSum(rootArr[i])
        if(max < sum) {
            max = sum;
            floor = i + 1
        }
    }
    return floor
};

function getSum(arr) {
    let total = 0
    arr.forEach(item => {
        total += item.val
    });
    return total
}

function changeTreeToArray(arr, index = 0) {
    let newArr = [], root = arr[index]
    for(let i = 0; i < root.length; i++) {
        let r = root[i]
        r.left && newArr.push(r.left);
        r.right && newArr.push(r.right)
    }
    if(newArr.length === 0) return arr
    arr.push(newArr);
    index++
    return changeTreeToArray(arr, index)
}