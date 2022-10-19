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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if(!root) return true
  return getDeep(root) !== -1
};

function getDeep(root) {
  if(!root) return 0
  let left = getDeep(root.left)
  let right = getDeep(root.right)
  if(left < 0 || right < 0) return -1
  if(Math.abs(left - right) <= 1) {
    return Math.max(left, right) + 1
  }
  return -1
}