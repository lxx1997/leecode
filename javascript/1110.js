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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let frestList = []
    if(!to_delete.includes(root.val)) {
      frestList.push(root)
    }
    let dfs = (node, del = to_delete.includes(node.val)) => {
      node.left = node.left && dfs(node.left)
      node.right = node.right && dfs(node.right)
      if(node.left && del && to_delete.indexOf(node.left.val) === -1) {
        frestList.push(node.left)
      }
      if(node.right && del && to_delete.indexOf(node.right.val) === -1) {
        frestList.push(node.right)
      }
      if(del) {
        return null
      }
      return node
    }
    dfs(root)
    return frestList
};