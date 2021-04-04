// 237. 删除链表中的节点
// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
// 现有一个链表 -- head = [4,5,1,9]，它可以表示为:

function ListNode(val) {
  this.val = val
  this.next = null
}

var deleteNode = function(head, node) {
  console.log(node, head)
    while(head && head.val === node) {
      head = head.next
    }
    let newHead = head
    while(head.next) {
      if(head.next.val === node) {
        head.next = head.next.next
      } else {
        head = head.next
      }
    }
    return newHead
};