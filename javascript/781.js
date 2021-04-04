// 781. 森林中的兔子
// 森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。
// 返回森林中兔子的最少数量。

var numRabbits = function(answers) {
  if(answers && answers.length === 0) {
    return 0
  }
  let length = answers.length, hashMap = new Map()
  let total = 0
  for(let i = 0; i < length; i++) {
    if(answers[i] === 0) {
      total += 1
      continue
    }
    if(!hashMap.has(answers[i])) {
      hashMap.set(answers[i],1)
    } else {
      let val = hashMap.get(answers[i])
      hashMap.set(answers[i], ++val)
    }
  }
  for(let [key, val] of hashMap.entries()) {
    let length = hashMap.get(key)
    if(length > key + 1) {
      total += (key + 1) * Math.ceil(length / (key + 1))
    } else {
      total += key + 1
    }
  }
  return total
}

console.log(numRabbits([1,0,1,0,0]), 5)
console.log(numRabbits([0,0,1,1,1]), 6)