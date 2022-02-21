/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let left = 0,
        right = 0
    let newdominoes = dominoes.split("")
    for (; right < newdominoes.length; right++) {
        if (newdominoes[right] === "L") {
            while (left < right) {
                newdominoes[left] = "L"
                left++
            }
        } else if (newdominoes[right] === "R") {
            left = right
            while (right < newdominoes.length - 1 && newdominoes[right] !== "L") {
                if (newdominoes[right] === "R") {
                    while (left < right) {
                        newdominoes[left] = "R"
                        left++
                    }
                }
                right++
            }
            if (newdominoes[right] === "L") {
                let r = right
                while (left <= r) {
                    if (left === r) {
                        newdominoes[left] = "."
                    } else {
                        newdominoes[left] = "R"
                        newdominoes[r] = "L"
                    }
                    left++
                    r--
                }
                left = right
            } else if (newdominoes[right] === ".") {
                while (left <= right) {
                    newdominoes[left] = "R"
                    left++
                }
            }
        }
    }
    return newdominoes.join("")
};