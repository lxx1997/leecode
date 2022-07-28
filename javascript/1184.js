/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if(start === destination) return 0
    let total = distance.reduce((total, item) => {
        return total + item
    }, 0)
    let dis = 0
    if(destination < start) {
        dis = distance.slice(destination, start).reduce((total, item) => {
            return total + item
        }, 0)
    } else {
        dis = distance.slice(start, destination).reduce((total, item) => {
            return total + item
        }, 0)
    }
    return Math.min(dis, total - dis)
};

console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 1), 1)
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 2), 3)
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 3), 4)
console.log(distanceBetweenBusStops(distance = [7,10,1,12,11,14,5,0], start = 7, destination = 2), 17)