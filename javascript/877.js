// 877. 石子游戏
// 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
// 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
// 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
// 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。

var stoneGame = function(piles) {
  if(piles.length === 2) return true
  let i = 0, diff = 0, index = 0
  let n = piles.length
  while(n > 0) {
    if(piles[i] < piles[n-1]) {
      if(index === 0) {
        diff += piles[n-1]
        index = 1
      } else {
        diff -= piles[n-1]
        index = 0
      }
      piles.pop()
      n = piles.length
    } else {
      if(index === 0) {
        diff += piles[i]
        index = 1
      } else {
        diff -= piles[i]
        index = 0
      }
      piles.shift()
      n = piles.length
    }
  }
  return diff > 0
};

console.log(stoneGame([5,3,4,5]), true)
console.log(stoneGame([5,3,4,4,4,5]), true)