package main

import "fmt"

// ListNode is a type for 链表
type ListNode struct {
	Val  int
	Next *ListNode
}

func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	fmt.Println(head.Val)
	// 奇数数列
	var oddHead *ListNode = new(ListNode)
	oddHead.Val = head.Val
	head = head.Next
	// 偶数数列
	var evenHead *ListNode = new(ListNode)
	evenHead.Val = head.Val
	head = head.Next
	var num int = 3
	for head != nil {
		fmt.Println(num, head.Val)
		if num%2 == 1 {
			lastOddHead := getLastNode(oddHead)
			lastOddHead.Next = new(ListNode)
			lastOddHead.Next.Val = head.Val
		} else {
			if evenHead == nil {
				evenHead = new(ListNode)
				evenHead.Val = head.Val
			} else {
				lastEvenHead := getLastNode(evenHead)
				lastEvenHead.Next = new(ListNode)
				lastEvenHead.Next.Val = head.Val
			}
		}
		num++
		head = head.Next
	}
	lastNode := getLastNode(oddHead)
	lastNode.Next = evenHead
	return oddHead
}

func getLastNode(node *ListNode) *ListNode {
	var lastNode *ListNode = node

	for lastNode.Next != nil {
		lastNode = lastNode.Next
	}
	return lastNode
}
