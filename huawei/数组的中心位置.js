const arrayCnterPoint = (arr) => {
  if(arr.length === 1) return 0
  if(arr.length === 2) return -1
  if(arr.length === 3) return arr[0] === arr[2] ? 1 : -1
  let productTotal = arr.reduce((t, i) => t *= i, 1)
  let productLeft = arr[0]
  let productRight = productTotal / arr[0] / arr[1]
  let left = 1
  while(left < arr.length) {
    if(productLeft === productRight) return left
    left++
    productLeft *= arr[left - 1]
    productRight /= arr[left]
  }
  return -1
}

console.log(arrayCnterPoint([2,5,3,6,5,6]))