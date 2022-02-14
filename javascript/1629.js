/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = 0, maxStr= 97
    for(let i = 0; i < keysPressed.length; i++) {
        let key = keysPressed[i].charCodeAt(), time = releaseTimes[i] - (releaseTimes[i-1] || 0)
        if(max < time) {
            maxStr = key
            max = time
        } else if(max === time) {
            maxStr = Math.max(maxStr, key)
            max = time
        }
    }
    return String.fromCharCode(maxStr)
};