package main
import "fmt"

/*
* 已解决
*/
func mySqrt(x int) int {
	var i int = 0
	fmt.Println(x)
	for i * i <= x {
		fmt.Println(i)
		if((i + 100) * (i + 100)<= x) {
			i = (i + 100)
		}
		i++
	}
  return i - 1
}