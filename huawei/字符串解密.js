const stringPass = (str1, str2) => {

  const arr = str1.replace(/[a-f0-9]+/g, ",").split(",").filter(item => item)
  console.log(arr)
  let strHash = new Set()
  for(let i = 0; i < str2.length; i++) {
    strHash.add(str2[i])
  }
  let str = ""

  const compare = (s1, s2) => {
    for(let i = 0; i < s1.length; i++) {
      if(!s2[i]) {
        return false
      } else if(s1[i].charCodeAt() < s2[i].charCodeAt()) {
        return false
      } else if(s1[i].charCodeAt() > s2[i].charCodeAt()) {
        return true
      }
    }
    return true
  }
  let maxSize = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= strHash.size) {
      let hash = new Set()
      for(let j = 0; j < arr[i].length; j++) {
        hash.add(arr[i][j])
      }
      if(hash.size <= strHash.size && maxSize <= hash.size) {
        maxSize = Math.max(hash.size, maxSize)
        if(!str) {
          str = arr[i]
        } else {
          if(!compare(str, arr[i])) {
            str = arr[i]
          }
        }
      }
    }
  }
  return str || "Not Found"
}
console.log(stringPass("thisisanewday111formernkkk", "good"))