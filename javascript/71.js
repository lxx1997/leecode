/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let p = path.split("/").filter(item => item !== "" && item !== ".")
    let newArr = []
    p.map(item => {
        if(item === "..") {
            newArr.pop()
        } else {
            newArr.push(item)
        }
    })
    if(!newArr[0]) {
        return "/"
    }
    newArr.unshift("")
    return newArr.join("/")
};