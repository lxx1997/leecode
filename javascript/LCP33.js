/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function(bucket, vat) {
  let times = [];
  let max = 0, maxIndex = 0
  for(let i = 0; i < bucket.length; i++) {
    times[i] = Math.ceil(vat[i] / bucket[i])
    if(max < times[i]) {
      max = times[i];
      maxIndex = i
    }
  }
  let before = times[maxIndex]
  let l = times.filter(time => time === max).length
  let b = bucket[maxIndex] + 1
  times[maxIndex] = Math.ceil(vat[maxIndex] / b)
  return Math.min(before, Math.max(...times) + l)
};