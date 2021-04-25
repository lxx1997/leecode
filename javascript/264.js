// 264. 丑数 II
// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

var nthUglyNumber = function(n) {
  let arr = [1]
  let index = [0,0,0]
  while(true){
    console.log(arr)
    if(arr[n - 1]) return arr[n - 1]
    if(arr[index[0]] * 2 < arr[index[1]] * 3 && arr[index[0]] * 2 < arr[index[2]] * 5) {
      arr.push(arr[index[0]] * 2)
      index[0]++
    } else if(arr[index[0]] * 2 > arr[index[1]] * 3 && arr[index[1]] * 3 < arr[index[2]] * 5) {
      arr.push(arr[index[1]] * 3)
      index[1]++
    } else if(arr[index[2]] * 5 < arr[index[0]] * 2 && arr[index[1]] * 3 > arr[index[2]] * 5) {
      arr.push(arr[index[2]] * 5)
      index[2]++
    } else if(arr[index[1]] * 3 === arr[index[2]] * 5 && arr[index[0]] * 2 === arr[index[2]] * 5) {
      arr.push(arr[index[1]] * 3)
      index[0]++
      index[1]++
      index[2]++
    } else if(arr[index[0]] * 2 === arr[index[1]] * 3) {
      arr.push(arr[index[0]] * 2)
      index[0]++
      index[1]++
    } else if(arr[index[0]] * 2 === arr[index[2]] * 5) {
      arr.push(arr[index[0]] * 2)
      index[0]++
      index[2]++
    } else if(arr[index[1]] * 3 === arr[index[2]] * 5) {
      arr.push(arr[index[1]] * 3)
      index[1]++
      index[2]++
    }
  }
};

console.log(nthUglyNumber(1690))