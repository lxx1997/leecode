package main

/*
* 已解决
*/

func kidsWithCandies(candies []int, extraCandies int) []bool {
	maxCandies := make([]bool, len(candies))
	var max int = candies[0]
	var i int = 0
	for i < len(candies) {
		if(max < candies[i]) {
			max = candies[i]
		}
		candies[i] = candies[i] + extraCandies
		i++
	}
	var j int = 0
	for j < len(candies) {
		if(max <= candies[j]) {
			maxCandies[j] = true
		} else {
			maxCandies[j] = false
		}
		j++
	}
	return maxCandies
}