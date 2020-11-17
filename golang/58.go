package main


func reverseLeftWords(s string, n int) string {

	// methods 1
	// var char int = n
	// for char < len(s) {
	// 	newstr = newstr + string(s[char])
	// 	char++
	// }
	// var char2 int = 0
	// for char2 < n {
	// 		newstr =  newstr + string(s[char2])
	// 		char2++
	// }

	// methods 2
	newstr := string([]byte(s)[n:]) + string([]byte(s)[:n]) 
	return newstr
}