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
  const arr1 = []
  const arr2 = []
  while(l1) {
    arr1.unshift(l1.val)
    l1 = l1.next
  }
  while(l2) {
    arr2.unshift(l2.val)
    l2 = l2.next
  }
  const arr3 = []
  let mode = 0
  while(arr1.length || arr2.length) {
    const l11 = arr1.shift() || 0
    const l21 = arr2.shift() || 0
    const total = l11 + l21 + mode
    arr3.unshift(total % 10)
    mode = Math.floor(total / 10)
  }
  if(mode) {
    arr3.unshift(mode)
  }
  let root = new ListNode()
  const root1 = root
  while(arr3.length) {
    root.val = arr3.shift()
    if(arr3.length) {
      root.next = new ListNode()
      root = root.next
    }
  }
  return root1
};