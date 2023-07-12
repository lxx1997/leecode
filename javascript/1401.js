/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    let dist = 0
    if(xCenter < x1 || xCenter > x2) {
        dist += Math.min(Math.pow(x1 - xCenter, 2), Math.pow(x2 - xCenter, 2))
    }
    if(yCenter < y1 || yCenter > y2) {
        dist += Math.min(Math.pow(y1 - yCenter, 2), Math.pow(y2 - yCenter, 2))
    }

    return dist <= Math.pow(radius, 2)
};