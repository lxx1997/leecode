/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    function getPointScale(point1, point2) {
        return Math.abs((point1[0] - point2[0]) / (point1[1] - point2[1]))
    }
    return getPointScale(points[0], points[1]) !== getPointScale(points[0], points[2])
};

console.log(isBoomerang([[1,1],[2,3],[3,2]]), true)
console.log(isBoomerang([[1,1],[2,2],[3,3]]), false)