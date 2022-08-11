/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words = words.sort((a,b) => a.length - b.length)
    let arr = []
    for(let i = 0; i < words.length - 1; i++) {
        let word = words[i], flag = false
        for(let j = i + 1; j < words.length && !flag; j++) {
            if(words[j].includes(word)) {
                flag = true;
                arr.push(word)
            }
        }
    }
    return arr
};