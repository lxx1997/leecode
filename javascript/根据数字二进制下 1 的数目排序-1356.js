var sortByBits = function(arr) {
  let index = []
  function getIndex(num) {
    let two = 0
    while(num > 1) {
      two += num % 2
      num = parseInt(num / 2)
    }
    two += num
    return two
  }
  arr.sort((a,b) => a - b).map(item => {
    let i = getIndex(item)
    console.log(item)
    if(index[i]) {
      index[i].push(item)
    } else {
      index[i] = [item]
    }
    return item
  })
  index = index.toString().split(',').filter(item => {
    if(item) {
      return item
    }
  })
  return index
};
console.log(sortByBits([2,3,5,7,11,13,17,19]))