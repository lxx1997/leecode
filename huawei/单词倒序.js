const wordSplitRevers = (str) => {
  let arr = str.split(" ")
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let lastIdex = -1
    lastIdex = Math.max(item.indexOf(","), item.indexOf("."), item.indexOf("?"))
    if(lastIdex !== -1) {
      let extra = item.substr(lastIdex, 1)
      arr[i] = item.substring(0, lastIdex).split("").reverse().join("") + extra
    } else {
      arr[i] = item.split("").reverse().join("")
    }
  }
  return arr.join(" ")
}

console.log(wordSplitRevers("yM eman si boB. ohW era uoy? ah ah,"))