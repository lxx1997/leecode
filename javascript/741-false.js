// 714. 买卖股票的最佳时机含手续费
// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。


var maxProfit = function(prices, fee) {
  let length = prices.length
  let minleft = prices[0]
  let total = 0
  for(let i = 1; i < length - 1; i++) {
    if(prices[i] < minleft) {
      minleft = prices[i]
    } else if (prices[i] - prices[i+1] > 2) {
      total += (prices[i]- minleft - 2)
      minleft = prices[i + 1]
    }
  }
  if(prices[length - 1] - minleft > 2) {
    total += (prices[length - 1]- minleft - 2)
  }
  return total
};

console.log(maxProfit([1,3,2,8,4,9], 2), 8)