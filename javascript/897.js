// 897. 递增顺序搜索树
// 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点
//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  if(!root) return null
  let head = new TreeNode()
  let tree = head
  function dfs(tree) {
    tree.left && dfs(tree.left)
    head.val = tree.val
    head.right = new TreeNode()
    head = head.right
    tree.right && dfs(tree.right)
  }
  dfs(root)
  head = tree
  while(head.right.right) {
      head = head.right
  }
  head.right = null
  return tree
};
