// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 
var reverseBetween = function(head, left, right) {
  while(left < right) {
    let rightNode = getNode(head, right)
    let leftNode = getNode(head, left)
    let temp = leftNode.val
    leftNode.val = rightNode.val
    rightNode.val = temp
    left++
    right--
  }
  return head
};
function getNode(head, index) {
  let i = 0
  while(i < index - 1) {
    head = head.next
    i++
  }
  return head
}

console.log(reverseBetween(head = [1,2,3,4,5], left = 2, right = 4))
console.log(reverseBetween(head = [5], left = 1, right = 1))