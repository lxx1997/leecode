// 94. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回它的 中序 遍历
var inorderTraversal = function(root, arr = []) {
  if(!root) return arr
  root.left && inorderTraversal(root.left, arr)
  arr.push(root.val)
  root.right && inorderTraversal(root.right, arr)
  return arr
};