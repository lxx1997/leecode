const findOneEntryArea = (arr) => {
  let m = arr.length, n = arr[0].length
  let hasFond = new Array(m).fill(0).map(item => new Array(n).fill(0))

  const checkOne = (array, i , j, arraw) => {
    if(i < 0 || j < 0 || i === m -1 || j === n -1) return 0
    if(hasFond[i][j] || arr[i][j] === "X") {
      return 0
    } else {
      if(i === 0 || j === 0 || i === m -1 || j === n -1) {
        hasFond[i][j] = 1
        return -1
      }
      hasFond[i][j] = 1
      let result1 = 0, result2 = 0, result3 = 0, result4 = 0;
      if(arraw !== "right") {
        result1 = checkOne(array, i - 1, j, "left")
      }
      if(arraw !== "top") {
        result1 = checkOne(array, i, j - 1, "bottom")
      }
      if(arraw !== "left") {
        result1 = checkOne(array, i + 1, j, "right")
      }
      if(arraw !== "bottom") {
        result1 = checkOne(array, i, j + 1, "top")
      }
      if(result1 === -1 || result2 === -1 || result3 === -1 || result4 === -1) {
        return -1
      }
      console.log(result1, result2,result3,result4)
      return result1 + result2 + result3 + result4 + 1
    }
  }
  let max = 0
  for(let j = 0; j < n; j++) {
    if(!hasFond[0][j]) {
      let res = 0
      if(j === 0) {
        if(arr[0][j+1] !== "O" && arr[1][j] !== "O") {
          res = 1
        } else {
          hasFond[i][j] = 1
        }
      } else if(j === n - 1) {
        if(arr[0][j - 1] !== "O" && arr[1][j - 1] !== "O") {
          res = 1
        } else {
          hasFond[i][j] = 1
        }
      } else {
        
      }
      checkOne(arr, 0, j , "bottom")
      console.log(res)
      if(res !== -1) {
        max = Math.max(max, res)
      }
    }
    if(!hasFond[m - 1][j]) {
      let res = checkOne(arr, m- 1, j , "top")
      if(res !== -1) {
        max = Math.max(max, res)
      }
    }
  }
  for(let i = 0 ; i < m; i++) {
    
    if(!hasFond[i][0]) {
      let res = checkOne(arr, i, 0 , "bottom")
      if(res !== -1) {
        max = Math.max(max, res)
      }
    }
    if(!hasFond[i][n-1]) {
      let res = checkOne(arr, i, n-1 , "top")
      if(res !== -1) {
        max = Math.max(max, res)
      }
    }
  }
  return max
}

console.log(findOneEntryArea([
  ["X", "O", "X", "X", "X"],
  ["X", "O", "O", "O","X"],
  ["X", "O", "X", "X", "X"],
  ["X", "O", "O", "O","X"],
  ["X", "O", "X", "X", "X"],
  ["X", "X", "X", "X","X"]
]))