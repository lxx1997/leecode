/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let left = 0,
        right = s.length - 1
    s = s.split("")
    while (left < right) {
        if (checkCode(s[left]) && checkCode(s[right])) {
            [s[left], s[right]] = [s[right], s[left]]
        } else if (!checkCode(s[left]) && checkCode(s[right])) {
            left++
            while (!checkCode(s[left])) {
                left++
            }
            [s[left], s[right]] = [s[right], s[left]]
        } else if (!checkCode(s[right]) && checkCode(s[left])) {
            right--
            while (!checkCode(s[right])) {
                right--
            }
            [s[left], s[right]] = [s[right], s[left]]
        }
        left++
        right--
    }
    return s.join("")
};
let codeHash = {}

function checkCode(str) {
    if (codeHash[str]) return true
    if (codeHash[str] === 0) return false
    str = str.toLocaleLowerCase().charCodeAt()
    if (str > 96 && str < 123) {
        codeHash[str] = 1
    } else {
        codeHash[str] = 0
    }
    return codeHash[str]
}