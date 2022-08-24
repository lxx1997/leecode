var removeNthFromEnd = function(head, n) {
    let length = getListLength(head)
    let root = head
    let num = length - n
    if(num === 0) return head.next
    while(--num) {
        root = root.next
    }
    root.next && (root.next = root.next.next)
    return head
};

function getListLength(root) {
    let l = 1
    while(root.next) {
        l++
        root = root.next
    }
    return l
}