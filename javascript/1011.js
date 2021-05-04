// 1011. 在 D 天内送达包裹的能力

// 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

// 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let i = 1
  while(i > 0) {
    let day = getDay(weights, i)
    if(day !== 0 && day  <= D) return i
    i++
  }
};

function getDay(weights, weight) {
  let w = weight, day = 0
  for(let i = 0; i < weights.length; i++) {
    if(weight < weights[i]) return 0
    if(w - weights[i] > 0) {
      w -= weights[i]
    } else if(w-weights[i] === 0) {
      w = weight
      day++
    } else if(w - weights[i] < 0) {
      w = weight - weights[i]
      day++
    }
  }
  if(w !== weight) {
    day++
  }
  return day
}

console.log(shipWithinDays([1,2,3,1,1], 4), 3)
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5), 15)