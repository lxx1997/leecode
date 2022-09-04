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
 * @return {number}
 *//**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var longestUnivaluePath = function(root) {
    let max = 0
    computedLength(root)
    function computedLength(root) {
        if(!root) return 0
        let left = computedLength(root.left)
        let right = computedLength(root.right)
        let arrleft = 0;
        let arrright = 0;
        if(root.left && root.left.val === root.val) {
            arrleft = left + 1
        }
        if(root.right && root.right.val === root.val) {
            arrright = right + 1
        }
        console.log(max, arrleft + arrright)
        max = Math.max(max, arrleft + arrright)
        return Math.max(arrleft, arrright)
    }
    return max
};
