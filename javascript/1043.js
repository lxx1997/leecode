/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var maxSumAfterPartitioning = function(arr, k) {
  const n = arr.length;
  const d = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      let maxValue = arr[i - 1];
      // 根据第i位，向前推k位，然后分别将对应元素与推的个数的乘积的最大值
      for (let j = i - 1; j >= Math.max(0, i - k); j--) {
          d[i] = Math.max(d[i], d[j] + maxValue * (i - j));
          if (j > 0) {
              maxValue = Math.max(maxValue, arr[j - 1]);
          }
      }
  }
  return d[n];

};

console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10],3))
console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3],4), 83)