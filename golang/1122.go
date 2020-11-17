package main

import (
	"fmt"
	"sort"
)

func relativeSortArray(arr1 []int, arr2 []int) []int {
	arr1 = sort.IntSlice(arr1)
	var newArr []int
	fmt.Println(arr1)
	for i := range arr2 {
		for j := range arr1 {
			if int(arr1[j]) == int(arr2[i]) {
				newArr = append(newArr, int(arr1[j]))
				arr1 = append(arr1[:j], arr1[j+1:]...)
				j--
			}
		}
	}
	newArr = append(newArr, arr1...)
	return newArr
}
