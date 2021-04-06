// 104. 二叉树的最大深度
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。
// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  return Math.max(getDep(root.left, 1), getDep(root.right,1))
};

function getDep(root, deep) {
  if(!root) return deep
  let leftDeep = root.left ? getDep(root.left, deep + 1) : deep
  let rightDeep = root.right ? getDep(root.right, deep + 1) : deep
  return Math.max(leftDeep, rightDeep)
}

