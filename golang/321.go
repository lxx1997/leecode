package main

func maxNumber(nums1 []int, nums2 []int, k int) []int {
	var nums1Length = len(nums1)
	var nums2Length = len(nums2)
	var i int = 0
	var max int = 0
	var maxArray []int
	if k == nums1Length+nums2Length {
		return computeNums(nums1, nums2)
	} else {
		if nums1Length >= nums2Length {
			for i < k {

			}
		} else {

		}
		return nums1
	}
}

func getMax(nums []int, k int) []int {

	return nums
}

func computeNums(nums1 []int, nums2 []int) []int {
	var i int = 0
	var j int = 0
	var num []int
	var length1 = len(nums1)
	var length2 = len(nums2)
	for i < length1 {
		if j < length2 {
			if nums1[i] > nums2[j] || nums1[i] == nums2[j] && i <= j {
				num = append(num, nums1[i])
				i++
			} else {
				num = append(num, nums2[j])
				j++
			}
		} else {
			num = append(num, nums1[i])
			i++
		}
	}
	if j < length2 {
		for j < length2 {
			num = append(num, nums2[j])
			j++
		}
	}
	return num
}
