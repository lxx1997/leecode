// 765. 情侣牵手
// N 对情侣坐在连续排列的 2N 个座位上，想要牵到对方的手。 计算最少交换座位的次数，以便每对情侣可以并肩坐在一起。 一次交换可选择任意两人，让他们站起来交换座位。
// 人和座位用 0 到 2N-1 的整数表示，情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2N-2, 2N-1)。
// 这些情侣的初始座位  row[i] 是由最初始坐在第 i 个座位上的人决定的。

var minSwapsCouples = function(row) {
  let rowMap = {}
  let length = row.length
  for(let i = 0; i < length; i++) {
    rowMap[row[i]] = i
  }
  let times = 0
  for(let i = 0; i < length; i+=2) {
    if(row[i] % 2 === 1) {
      if(row[i+1] !== row[i] - 1) {
        let j = rowMap[row[i] - 1]
        rowMap[row[i + 1]] = j
        rowMap[row[i] - 1] = i+1
        let temp = row[i + 1]
        row[i + 1] = row[j]
        row[j] = temp
        times++
      }
    } else {
      if(row[i+1] !== row[i] + 1) {
        let j = rowMap[row[i] + 1]
        rowMap[row[i + 1]] = j
        rowMap[row[i] + 1] = i+1
        let temp = row[i + 1]
        row[i + 1] = row[j]
        row[j] = temp
        times++
      }
    }
  }
  return times
};
console.log(minSwapsCouples([0,2,4,6,7,1,3,5]))
