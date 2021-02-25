// 1052. 爱生气的书店老板
// 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。
// 在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。
// 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。
// 请你返回这一天营业下来，最多有多少客户能够感到满意的数量。

var maxSatisfied = function(customers, grumpy, X) {
  let left = 0,right = 0, max = 0, maxtotal = 0
  let total = 0
  let length = customers.length
  while(right < length) {
    if(grumpy[right] === 0) {
      total += customers[right]
    } else {
      max += customers[right]
      while(right-left >= X || grumpy[left] === 0) {
        if(grumpy[left] === 1) {
          max -= customers[left]
        }
        left++
      }
      maxtotal = Math.max(max, maxtotal)
    }
    right++
  }
  return total + maxtotal
};

console.log(maxSatisfied(customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3), 16)
console.log(maxSatisfied(customers = [4,10,10], grumpy = [1,1,0], X = 2), 24)
console.log(maxSatisfied(customers = [2,6,6,9], grumpy = [0,0,1,1], X = 1), 17)
console.log(maxSatisfied(customers = [9,10,4,5], grumpy = [1,0,1,1], X = 1), 19)
console.log(maxSatisfied(customers = [9,10,4,5], grumpy = [0,0,1,1], X = 1), 24)

