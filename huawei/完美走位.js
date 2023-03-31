/**
 * @title 解题思路
 *  
 * @description 首先计算出 平均每个字符需要出现的次数，然后，在计算出给定字符串相比于需要出现次数的差，然后进行循环遍历
 * 
 * 循环遍历的基础是从字符串开头第一个出现次数差大于0 的字符串开始进行for 循环计算，计算出第i 位，需要替换多少个字符，才能达到完美走位
 * 
 * 在这个过程中，我们需要缓存一个 次数差，以及判断次数差是否都小于0，存储最小值
 */

function getPerfectMove(s) {
  const n = s.length;
  let equalNum = n / 4
  let count = {A: 0, S: 0, D: 0, W: 0};
  for (let i = 0; i < n; i++) {
    count[s[i]]++;
  }
  if (count.A === count.S && count.S === count.D && count.D === count.W) {
    return 0;
  }
  let needCount = {
    A: count.A - equalNum,
    D: count.D - equalNum,
    S: count.S - equalNum,
    W: count.W - equalNum
  }
  let minLen = n
  for(let i = 0; i < n; i++) {
    let str = s[i]
    let length = 0
    let copyCount = {...needCount}
    if(copyCount[str] > 0) {
      for(let j = i; j < n; j++) {
        if(copyCount[s[j]] > 0) {
          copyCount[s[j]]--
        }
        length++
        if(copyCount.A <= 0 && copyCount.D <= 0 && copyCount.W <= 0 && copyCount.S <= 0) {
          minLen = Math.min(length, minLen)
          break;
        }
      }
    }
  }
  return minLen;
}
// 测试
console.log(getPerfectMove("WASDAASD")); // 输出：1
console.log(getPerfectMove("AAAA")); // 输出：3