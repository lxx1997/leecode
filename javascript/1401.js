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
    let rectCenterX = (x1 + x2) * 0.5
    let rectCenterY = (y1 + y2) * 0.5
    let rectLinkRound = [Math.abs(xCenter - rectCenterX), Math.abs(yCenter - rectCenterY)]
    let rectLinkAngle = [x2 - rectCenterX, y2 - rectCenterY]
    let rectAngleLinkRound = [Math.max(rectLinkRound[0] - rectLinkAngle[0], 0), Math.max(rectLinkRound[1] - rectLinkAngle[1], 0)]
    return Math.sqrt(rectAngleLinkRound[0] * rectAngleLinkRound[0] + rectAngleLinkRound[1] * rectAngleLinkRound[1]) < radius
};