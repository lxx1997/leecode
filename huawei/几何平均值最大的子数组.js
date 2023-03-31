const func = (arr, l) => {
  let max = 0, save = []
  for(let i = 0; i <= arr.length - l; i++) {
    let mult = 1
    for(let k = i; k < i + l; k++) {
      mult *= arr[k]
    }
    let pow = Math.pow(mult, 1 / l)
    if(max < pow) {
      max = pow
      save = [i, i + l]
    } else if(max === pow) {
      save = save[1] - save[0] + 1 > l ? [i, i + 1] : save
    }
    for(let j = i + l; j < arr.length; j++) {
      mult *= arr[j]
      let pow = Math.pow(mult, 1 / (j - i + 1))
      console.log(pow, i, j)
      if(max < pow) {
        max = pow
        save = [i, j]
      } else if(max === pow) {
        save = save[1] - save[0]  + 1 > j - i  +1 ? [i, j] : save
      }
    }
  }
  return [save[0], save[1] - save[0]]
}

console.log(func([2,2,3], 2))
console.log(func([0.2,0.1,0.2,0.2,0.2,0.1,0.2,0.2,0.2,0.2], 2))