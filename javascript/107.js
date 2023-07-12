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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let arr = []
  const dfs = (node, index) => {
    if(arr[index]) {
      arr[index].push(node.val)
    } else {
      arr[index] = [node.val]
    }
    node.left && dfs(node.left, index + 1)
    node.right && dfs(node.right, index + 1)
  }
  root && dfs(root, 0)
  return arr
};