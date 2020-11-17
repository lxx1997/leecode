package main

import "fmt"

/*
* 未解决
 */
var min int = 0

// Steps is a func
func Steps(ring string, key string, num int, char int) {
	for char < len(key) {
		var length = len(ring)
		char++
		checkedChar := true
		length1 := 0
		length2 := 0
		for char2 := range ring {
			if checkedChar {
				num++
			}
			fmt.Println(checkedChar, char2)
			if char2 == 0 {
				if string(key[char-1]) == string(ring[char2]) {
					ring = changeStr(ring, char2)
					break
				}
			} else {
				if length1 < 1 && string(key[char-1]) == string(ring[char2]) {
					ring = changeStr(ring, char2)
					// Steps(ring, key, num, char - 1)
					length1++
					checkedChar = false
				}
				if length2 < 1 && string(key[char-1]) == string(ring[length-char2]) {
					ring = changeStr(ring, length-char2)
					// Steps(ring, key, num, char - 1)
					length2++
					checkedChar = false
				}
			}
		}
	}
	fmt.Println(num)
	if min == 0 || min > num {
		min = num
	}
}

func changeStr(str string, index int) string {
	newstr := ""
	var char int = index
	for char < len(str) {
		newstr = newstr + string(str[char])
		char++
	}
	var char2 int = 0
	for char2 < index {
		newstr = newstr + string(str[char2])
		char2++
	}
	return newstr
}
func findRotateSteps(ring string, key string) int {
	Steps(ring, key, 0, 0)
	return min
}
