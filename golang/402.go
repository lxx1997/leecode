package main

func removeKdigits(num string, k int) string {
	if k >= len(num) {
		return "0"
	}
	if k == 0 {
		return num
	}
	for {
		max, maxindex, j := num[1], 1, 1
		if num[1] < num[0] {
			maxindex = 0
		} else {
			for j < len(num) {
				if num[j] >= max {
					maxindex = j
					max = num[j]
				} else {
					break
				}
				j++
			}
		}
		if maxindex == 0 {
			num = getNum(string([]byte(num)[1:]))
		} else {
			num = getNum(string([]byte(num)[:maxindex]) + string([]byte(num)[maxindex+1:]))
		}
		k--
		if k == 0 {
			break
		}
	}

	return num
}
func getNum(num string) string {
	for {
		if len(num) == 0 {
			num = "0"
			break
		}
		if num[0] <= 48 {
			num = string([]byte(num)[1:])
		} else {
			break
		}
	}
	return num
}
