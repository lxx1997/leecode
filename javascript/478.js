/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
 var Solution = function(radius, x_center, y_center) {
    this.radius = radius
    this.x = x_center
    this.y = y_center
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let radius = Math.sqrt(Math.random() * Math.pow(this.radius, 2))
    let angle = Math.random() * 360
    let x = radius * Math.sin(angle), y = radius * Math.cos(angle)
    return [this.x + x, this.y + y]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

const solute = new Solution(1, 0, 0)
console.log(solute.randPoint())