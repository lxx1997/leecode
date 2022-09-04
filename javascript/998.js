/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoMaxTree = function(root, val) {
    if(!root) return null;
    if(root.val < val) {
        return {
            val,
            left: root,
            right: null
        }
    }
    let tree = root
    while(tree.right && tree.right.val >= val) {
        tree = tree.right
    }
    let node = tree.right
    tree.right = {
        val,
        left: node,
        right: null
    }
    return root
};