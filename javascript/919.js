var CBTInserter = function(root) {
    this.root = root
    this.incompleteNode = getFirstIncompleteTree(root)
};

CBTInserter.prototype.insert = function(val) {
    if(!this.incompleteNode.left) {
        this.incompleteNode.left = {
            val: val
        }
    } else if(!this.incompleteNode.right) {
        this.incompleteNode.right = {
            val: val
        }
    }
    let parent = this.incompleteNode
    if(this.incompleteNode.left && this.incompleteNode.right) {
        this.incompleteNode = getFirstIncompleteTree(this.root)
    }
    return parent.val
};

function getFirstIncompleteTree(root) {
    let nodeList = getTreeNodes([root])
    for(let i = 0; i < nodeList.length; i++) {
        let node = checkIncompleteTree(nodeList[i])
        if(node) return nodeList[i]
    }
    return null
}

function getTreeNodes(arr = [root]) {
    let newArr = [...arr]
    for(let i = 0; i < arr.length; i++) {
        let root = arr[i]
        root.left && newArr.push(root.left)
        root.right && newArr.push(root.right)
        if(!root.left || !root.right) return newArr
    }
    return getTreeNodes(newArr)
}

function checkIncompleteTree(node) {
    return !node.left || !node.right
}

CBTInserter.prototype.get_root = function() {
    return this.root
};