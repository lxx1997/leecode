// 按照单位价钱内 能买多少短信排序，同等价位取最大值
const func = (money, arr) => {
  arr = arr.map((item, index) => [index + 1, item]).sort((a, b) => b[1]/b[0] === a[1]/a[0] ? b[0]-a[0] : b[1]/b[0] - a[1]/a[0])
  let total = 0
  for(let i = 0; i < arr.length; i++) {
    let m = arr[i][0], n = arr[i][1]
    while(money >= m) {
      money -= m
      total += n
    }
  }
  return total
}

console.log(func(7, [10,20,30,40,60]))