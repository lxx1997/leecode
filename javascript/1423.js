/**
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
 * 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
 * 你的点数就是你拿到手中的所有卡牌的点数之和。
 * 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
 * 
 * 输入：cardPoints = [1,2,3,4,5,6,1], k = 3
 * 输出：12
 * 解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。
 */

 /**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// var maxScore = function(cardPoints, k) {
//   function getCard(cardPoints) {
//      let start = cardPoints[0]
//      let end = cardPoints[cardPoints.length - 1]
//      if(start > end) return cardPoints.shift()
//      return cardPoints.pop()
//   }
//   let total = 0
//   for(let i = 0; i < k; i++) {
//     total += getCard(cardPoints)
//   }
//   return total
// };
var maxScore = function(cardPoints, k) {
  let newCardPoint = cardPoints.slice(0, k).reverse().concat(cardPoints.slice(cardPoints.length-k).reverse())
  let total = 0, sum = 0
  let length = newCardPoint.length
  for(let i = 0; i < length; i++) {
    if(i < k) {total = sum = total + newCardPoint[i]}
    else {
      sum = sum + newCardPoint[i] - newCardPoint[i-k]
      total = Math.max(total, sum)
    }
  }
  return total
};

console.log(maxScore(cardPoints = [1,2,3,4,5,6,1], k = 3))