package main

/*
* 已解决
*/
func runningSum(nums []int) []int {
	var newNum []int;
	var sum int
	var i int = 0
	for i < len(nums) {
		sum += nums[i]
		i++
		newNum = append(newNum,sum)
	}
	return newNum
}