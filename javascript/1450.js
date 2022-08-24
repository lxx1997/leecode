
var busyStudent = function(startTime, endTime, queryTime) {
    let num = 0
    for(let i = 0; i < startTime.length; i++) {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) {
            num++
        }
    }
    return num
};