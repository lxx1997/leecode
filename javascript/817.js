/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
 var numComponents = function(head, nums) {
  let node = head, arr = {}, length = 0, component = false
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]] = 1
  }
  while(node) {
    if(!component)  {
      if(arr[node.val]) {
        component = true
        length++
      }
    } else {
      if(!arr[node.val]) {
        component = false
      }
    }
    node = node.next
  }
  return length
};
