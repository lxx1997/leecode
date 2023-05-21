/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
 var hardestWorker = function(n, logs) {
  let max = logs[0][1], maxId = logs[0][0]
  for(let i = 1;i < logs.length; i++) {
    let log = logs[i], before = logs[i - 1]
    let leaveTime = log[1] - before[1]
    if(leaveTime > max) {
      max = leaveTime
      maxId = log[0]
    } else if(leaveTime === max) {
      maxId = Math.min(maxId, log[0])
    }
  }
  return maxId
};