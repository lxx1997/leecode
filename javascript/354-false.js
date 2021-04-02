// 354. 俄罗斯套娃信封问题
// 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
// 说明:
// 不允许旋转信封。

// var maxEnvelopes = function(envelopes) {
//   envelopes = envelopes.sort((a,b) => (a[0] - b[0] )|| (a[1] - b[1]))
//   function filter(total,item) {
//     let l = total.length
//     if(l === 0)  {
//       total.push(item)
//       return total
//     }
//     if(item[0] > total[l - 1][0] && item[1] > total[l-1][1]) {
//       total.push(item)
//       return total
//     }
//     return total
//   }
//   console.log(envelopes)
//   let max = envelopes.reduce(filter, []).length
//   while(envelopes.shift()) {
//     max = Math.max(max, envelopes.reduce(filter, []).length)
//   }
//   return max
// };
// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]), 3)
// console.log(maxEnvelopes([[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]]), 5)

var obj = new Array(10)
console.log(obj)