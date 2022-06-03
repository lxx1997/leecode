/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let arr = [],
        num = numRows + numRows - 2
    for (let i = 0; i < s.length;) {
        arr.push(s.substring(i, i + num))
        i += num
    }
    let str = ""
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, i, num - i, arr[j][i], arr[j][num - i])
            if (i === num - i) {
                str += (arr[j][i] || "")
            } else {
                str += (arr[j][i] || "")
                str += (arr[j][num - i] || "")
            }
        }
    }
    console.log(str)
    return str
};
convert(s = "PAYPALISHIRING", numRows = 4)