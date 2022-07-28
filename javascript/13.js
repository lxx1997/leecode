/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let NumHash = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    let num = 0, arr = ["IV", "IX", "XL", "XC", "CD", "CM"];
    arr.map(item => {
        s = repalceValue(s, item)
    });
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " ") {
            num += NumHash[s[i]]
        }
    }

    function repalceValue(s, key) {
        s = s.replace(new RegExp(key, "g"), () => {
            num += NumHash[key]
            return " "
        })
        return s
    }
    return num
};

console.log(romanToInt("MCMXCIV"), 1994)