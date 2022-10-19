var advantageCount = function(nums1, nums2) {
  const n = nums1.length;
  const idx1 = new Array(n).fill(0);
  const idx2 = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
      idx1[i] = i;
      idx2[i] = i;
  }
  idx1.sort((i, j) => nums1[i] - nums1[j]);
  idx2.sort((i, j) => nums2[i] - nums2[j]);

  const ans = new Array(n).fill(0);
  let left = 0, right = n - 1;
  for (let i = 0; i < n; ++i) {
      if (nums1[idx1[i]] > nums2[idx2[left]]) {
          ans[idx2[left]] = nums1[idx1[i]];
          ++left;
      } else {
          ans[idx2[right]] = nums1[idx1[i]];
          --right;
      }
  }
  return ans;
};