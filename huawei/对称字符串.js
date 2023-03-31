const SymmetricString = (n, k) => {
  let length = Math.pow(2, n)
  let reverse = 0
  while(k > 1) {
    while(k <= length) {
      length = length >> 1
    }
    k = k - length
    reverse++
  }
  console.log(reverse)
  if(n % 2 === 0) {
    return reverse % 2 === 0 ? "B" : "R"
  } else {
    return reverse % 2 === 0 ? "R" : "B"
  }
}


console.log(SymmetricString(5, 10), "R")
console.log(SymmetricString(5, 6), "R")
console.log(SymmetricString(3, 2), "b")
console.log(SymmetricString(3,4), "r")
console.log(SymmetricString(5,16), "r")