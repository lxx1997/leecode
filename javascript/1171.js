/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
  let list = []
  let nHead = head
  while(nHead) {
    list.push(nHead.val)
    nHead = nHead.next
  }
  let needContinue = true
  while(needContinue) {
    let sum = [0]
    for(let i = 1; i < list.length; i++) {
      sum[i + 1] = sum[i] + list[i]
    }
    let start = -1, end = 0
    for(let i = 0; i < sum.length; i++) {
      end = i
      start = -1
      for(let j = i - 1; j >= 0; j--) {
        if(sum[i] === sum[j]) {
          start = j
        }
      }
      if(start !== -1) {
        break
      }
    }
    if(start !== -1) {
      list.splice(start, end - start)
    } else {
      needContinue = false
    }
  }
  let newHead = new ListNode()
  let node = newHead
  for(let i = 0; i < list.length; i++) {
    if(list[i]) {
      node.next = new ListNode(list[i])
      node = node.next
    }
  }
  return newHead.next
};