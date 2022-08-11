/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let logArray = new Array(n).fill(0)
    let stack = [], currentTime = 0
    for(let i = 0; i < logs.length; i++) {
        let log = logs[i].split(":")
        log[0] = +log[0]
        log[2] = +log[2]
        if(log[1] ==="end") {
            stack.pop()
            logArray[log[0]] += log[2] - currentTime + 1
            currentTime = log[2] + 1
        } else {
            let length = stack.length
            if(length) {
                logArray[stack[length - 1][0]] += log[2] - currentTime
            }
            currentTime = log[2]
            stack.push(log)
        }
    }
    return logArray
};

console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]))