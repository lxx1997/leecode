/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(!node) return null
  if(node.neighbors.length === 0) return new Node(node.val)
  let newNode = new Node() // 创建一个新的Node
  let used = new Map()
  const dfs = (n, nn) => {
    if(used.has(n.val)) return used.get(n.val)
    nn.val = n.val
    used.set(n.val, nn)
    for(let i = 0; i < n.neighbors.length; i++) {
      nn.neighbors.push(dfs(n.neighbors[i], new Node()))
    }

    return nn
  }
  return dfs(node, newNode)
};