/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
  const l = arr.length
  let num = 0
  for(let i = 0; i < l - 2; i++) {
    for(let j = i + 1; j < l - 1; j++) {
      for(let k = j + 1; k < l; k++) {
        if(abs(arr[i], arr[j]) <= a && abs(arr[j], arr[k]) <= b && abs(arr[i], arr[k]) <= c) {
          num++
        }
      }
    }
  }
  return num
};

const abs = (i, j) => {
  return Math.abs(i - j)
}