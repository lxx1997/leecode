// 938. 二叉搜索树的范围和

// 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

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
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
   let total = 0
  function dfs(root) {
    if(!root) return
    if(root.val >= low && root.val <= high) {
      total += root.val
    }
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  dfs(root)
  return total
};

console.log(rangeSumBST([]))