/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let str = "", num = "", reg = RegExp("[0-9]")
    for(let i = 0; i < s.length; i++) {
        if(reg.test(s[i])) {
            num += s[i]
        } else {
            str += s[i]
        }
    }
    if(Math.abs(num.length - str.length) > 1) return ""
    let l = 0, flag = num.length > str.length
    let str1 = ''

    while(l < num.length && l < str.length) {
        if(flag) {
            str1 += num[l]
            str1 += str[l]
        } else {
            str1 += str[l]
            str1 += num[l]
        }
        l++
    }
    while(l < num.length) {
        str1 += num[l]
        l++
    }
    while(l < str.length) {
        str1 += str[l]
        l++
    }
    return str1
};