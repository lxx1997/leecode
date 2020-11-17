package main

import "fmt"

// 先对输入数组排序，h升序，k降序 从头循环遍历 当前这个人就是剩下未安排的人中最矮的人，他的k值就代表他在剩余空位的索引值 如果有多个人高度相同，要按照k值从大到小领取索引值 示例：
// [ 4, 4 ], [ 5, 2 ],[ 5, 0 ],[ 6, 1 ],[ 7, 1 ],[ 7, 0 ]
// [ 0, 1, 2, 3, 4, 5 ] [ 4, 4 ] 4
// [ 0, 1, 2, 3, 5 ]    [ 5, 2 ] 2
// [ 0, 1, 3, 5 ]       [ 5, 0 ] 0
// [ 1, 3, 5 ]          [ 6, 1 ] 3
// [ 1, 5 ]             [ 7, 1 ] 5
// [ 1 ]                [ 7, 0 ] 1
// [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
func reconstructQueue(people [][]int) [][]int {
	var index = make([]int, len(people))
	for i := range people {
		if i == len(people) {
			return people
		}
		j := i + 1
		for j < len(people) {
			fmt.Println(people[j][0], people[i][0])
			if people[j][0] < people[i][0] {
				people[i], people[j] = people[j], people[i]
			} else if people[j][0] == people[i][0] && people[j][1] > people[i][1] {
				people[i], people[j] = people[j], people[i]
			}
			j++
		}
		index[i] = i
	}
	var newPeople = make([][]int, len(people))
	for j := range people {
		num := people[j][1]
		newPeople[index[num]] = people[j]
		index = append(index[:num], index[num+1:]...)
	}
	return newPeople
}
