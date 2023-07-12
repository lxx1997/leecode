/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let lt = new ListNode()
  let ln = lt
  let mode = 0
  while(l1 || l2) {
    if(l1) {
      mode += l1.val
      l1 = l1.next
    }
    if(l2) {
      mode += l2.val
      l2 = l2.next
    }
    lt.val = mode % 10
    mode = Math.floor(mode / 10)
    if(l1 || l2) {
      lt.next= new ListNode()
      lt = lt.next
    }
  }
  if(mode) {
    lt.next= new ListNode()
    lt = lt.next
    lt.val = mode
  }
  return ln
};