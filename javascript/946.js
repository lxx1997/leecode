/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0, j = 0, l = -1;
    while(i < pushed.length && j < popped.length) {
        stack.push(pushed[i])
        l++
        i++
        while(stack[l] === popped[j]) {
            stack.pop()
            l--
            j++
        }
    }
    while(j < popped.length) return false
    return true
};