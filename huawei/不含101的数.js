const notHas101Number = (start, end) => {
  let has101 = 0
  for(let i = start; i <= end; i++) {
    let hash = i.toString(2)

    if(hash.indexOf("101") !== -1) {
      has101++
    }
  }
  console.log(has101)
  return end - start + 1 - has101
}

console.log(notHas101Number(1, 10), 8)
console.log(notHas101Number(10, 20), 7)
console.log(notHas101Number(1, 20), 15)