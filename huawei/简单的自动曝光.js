const SimpleAutoExpose = (arr) => {
  let total = arr.reduce((total, item) => total +item, 0)
  let length = arr.length
  let avage = total / length
  return Math.floor(128 - avage)
}

console.log(SimpleAutoExpose([0,0,0,0]))
console.log(SimpleAutoExpose([129,130,129,130]))
