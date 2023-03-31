const checkRepeatCode = (code1, code2) => {
  const hashMap = new Array(code1.length + 1).fill(0).map(() => new Array(code2.length + 1).fill(""))
  let commonStr = ""
  for(let i = 0; i < code1.length; i++) {
    for(let j = 0; j < code2.length; j++) {
      if(code1[i] === code2[j]) {
        hashMap[i + 1][j + 1] = hashMap[i][j] + code1[i]
        if(commonStr.length < hashMap[i + 1][j + 1].length) {
          commonStr = hashMap[i + 1][j + 1]
        }
      }
    }
  }
  return commonStr
}

console.log(checkRepeatCode("hello1234sfasdf", "hello1234asdfas"))
console.log(checkRepeatCode("hello1234sfasdf", "helo1asdfas"))