const resortString = (str) => {
  const arr = str.split(" ").map(item => item.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join(""))
  console.log(arr)
  let hash = {}
  for(let i = 0; i < arr.length; i++) {
    if(!hash[arr[i]]) {
      hash[arr[i]] = 0
    }
    hash[arr[i]]++
  }
  let newArr = []
  Object.keys(hash).map(item => {
    newArr.push([item, hash[item]])
  })
  // sort 的时候，个数不同按照个数来分，个数相同时，按照长度来分，长度相同时，按照字典顺序分
  // a[0].length === b[0].length && a[1] === b[1] ? a[0][0].charCodeAt() - b[0][0].charCodeAt() : a[1] - b[1]
  return newArr.sort((a, b) => a[1] === b[1] ? a[0].length === b[0].length ? a[0][0].charCodeAt() - b[0][0].charCodeAt() : a[0].length - b[0].length : b[1] - a[1])
            .reduce((total, item) => total = [...total, ...new Array(item[1])
            .fill(item[0])], []).join(" ")
}
console.log("a" - "b")
console.log(resortString("This is an apple"), "an is This aelpp")
console.log(resortString("My sister is in the house not in the yard"), "in in eht eht My is not adry ehosu eirsst")