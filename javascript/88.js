// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

var merge = function(nums1, m, nums2, n) {
  let arr = []
  for(let i = 0; i < m; i++) {
    arr[i] = nums1[i]
  }
  let index = 0
  while(arr[0] != null && nums2[0] != null) {
    if(arr[0] <= nums2[0]) {
      nums1[index++] = arr.shift()
    } else {
      nums1[index++] = nums2.shift()
    }
  }
  if(arr.length > 0) {
    while(arr[0] != null) {
      nums1[index++] = arr.shift()
    }
  }
  if(nums2.length > 0) {
    while(nums2[0] != null) {
      nums1[index++] = nums2.shift()
    }
  }
};