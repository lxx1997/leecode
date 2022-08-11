/**
 * @param {string} equation
 * @return {string}
 */
 var solveEquation = function(equation) {
    const eq = equation.split("=")
    let left = eq[0], right = eq[1]
    let { xn: ln, total: lt } = computedX(left)
    let { xn: rn, total: rt } = computedX(right)
    let x = ln - rn, r = rt - lt
    if(x === 0 && r === 0) return "Infinite solutions"
    if(x === 0) return "No solution"
    return `x=${r/x}`
};

function computedX(str) {
    let xn = 0, total = 0, flag = 1, num = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "x") {
            xn += num === "" ? 1 * flag : +num * flag
            num = ""
        } else if(str[i] === "-") {
            total += (+num || 0) * flag
            flag = -1
            num = ""
        } else if(str[i] === "+") {
            total += (+num || 0) * flag
            flag = 1
            num = ""
        } else {
            num += str[i]
        }
    }
    total += (+num || 0) * flag
    return {
        xn,
        total
    }
}

console.log(solveEquation("x+5-3+x=6+x-2"), "x=2")
console.log(solveEquation("-x=-1"), "x=1")