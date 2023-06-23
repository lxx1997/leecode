/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  let l = gas.length
  let reachEnd = -1
  for(let i = 0; i < l; i++) {
    // 获取起点位置
    if(gas[i] >= cost[i]) {
      let last = gas[i]
      let isBreak = false
      for(let j = i + 1; j < i + l && !isBreak; j++) {
        let ind = j % l
        last = gas[ind] - cost[(j - 1) % l] + last
        if(last < cost[ind]) {
          isBreak = true
          i = j - 1
        }
      }
      if(!isBreak) {
        return i
      }
    }
  }
  return reachEnd
};