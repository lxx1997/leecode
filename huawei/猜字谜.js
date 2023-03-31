const charade = (str, str2) => {
  let s1 = str.split(",")
  let s2 = str2.split(",")
  let s1Array = {}
  let s2Array = {}
  for(let i = 0; i < s1.length; i++) {
    let arr1 = s1[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt())
    s1Array[s1[i]] = arr1
  }
  for(let i = 0; i < s2.length; i++) {
    let arr1 = s2[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt())
    s2Array[s2[i]] = arr1
  }

  const check = (i, j) => {
    let arr1 = s1Array[i]
    let arr2 = s2Array[j]
    // 长度相等才会满足替换
    if(i.length === j .length) {
      return arr1.every((item, index) => item === arr2[index])
    }
    arr1 = Array.from(new Set(arr1))
    arr2 = Array.from(new Set(arr2))
    // 长度不相等，去重 后判断
    return arr1.every((item, index) => item === arr2[index])
  }

  let result = new Set()
  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++) {
      if(!result.has(s2[j])) {
        let r = check(s1[i], s2[j])
        if(r) {
          result.add(s2[j])
        }
      }
    }
  }
  return Array.from(result).join(",")
}

console.log(charade("nesw,woood", "news,wod,dsdf,woooooood,wdoooo"))