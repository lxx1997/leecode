package main
import "fmt"

/*
* 已解决
*/

//  按奇偶排序数组 II
func sortArrayByParityII(A []int) []int {
	fmt.Println(A)
	var newArray []int
	var oddNumber []int
	var evenNumber []int
	for index := range A {
		if(int(A[index]) % 2 == 1) {
			oddNumber = append(oddNumber, int(A[index]))
		}else {
			evenNumber = append(evenNumber, int(A[index]))
		}
	}
	for i := range oddNumber {
		newArray = append(newArray,int(evenNumber[i]))
		newArray = append(newArray,int(oddNumber[i]))
	}
	return newArray
}