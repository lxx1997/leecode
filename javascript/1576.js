/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let str = ""
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "?") {
            let a = s[i-1], b = s[i+1]
            if(a) a = a.charCodeAt()
            else a = 0
            if(b) b = b.charCodeAt()
            else b = 0
            let k = 97
            while(Math.abs(k - a) <= 1 || Math.abs(b - k) <= 1) {
                k++
            }
            str += String.fromCharCode(k)
            s = s.substring(0, i) + String.fromCharCode(k) + s.substring(i + 1)
        } else {
            str += s[i]
        }
    }
    return str
};
console.log(modifyString("?zs"), "azs")
console.log(modifyString("ubv??w"), "ubvaw")