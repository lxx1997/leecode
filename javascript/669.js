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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  const bfs = (tree) => {
    if(tree.val >= low && tree.val <= high) {
      tree.left && (tree.left = bfs(tree.left))
      tree.right && (tree.right = bfs(tree.right))
      return tree
    } else {
      if(tree.val < low) {
        return tree.right && (right = bfs(tree.right))
      }
      if(tree.val > high) {
        return tree.left && (left = bfs(tree.left))
      }
    }
  }
  return bfs(root)
};