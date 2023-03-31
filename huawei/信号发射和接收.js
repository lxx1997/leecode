const func = (arr) => {
  let m  = arr.length, n = arr[0].length
  // let maxHArr = []
  // for(let i = 0; i < m; i++) {
  //   maxHArr[i] = [] 
  //   for(let j = 0; j < n; j++) {
  //     if(j === 0) {
  //       maxHArr[i][j] = arr[i][j]
  //     } else {
  //       if(maxHArr[i][j - 1] >= arr[i][j]) {
  //         maxHArr[i][j] = maxHArr[i][j - 1]
  //       } else {
  //         maxHArr[i][j] = arr[i][j]
  //       }
  //     }
  //   }
  // }
  // let maxVarr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  
  // for(let i = 0; i < n; i++) {
  //   for(let j = 0; j < m; j++) {
  //     if(j === 0) {
  //       maxVarr[j][i] = arr[j][i]
  //     } else {
  //       console.log(maxVarr[j - 1][i],arr[j][i])
  //       if(maxVarr[j - 1][i] >= arr[j][i]) {
  //         maxVarr[j][i] = maxVarr[j - 1][i]
  //       } else {
  //         maxVarr[j][i] = arr[j][i]
  //       }
  //     }
  //   }
  // }
  // console.log(maxHArr, maxVarr)
  let getArr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i === 0 && j === 0) {
        getArr[i][j] = 0
      } else {
        let total = 0, k = i - 1, l = j - 1
        let maxI = 0, maxJ = 0
        while(k >= 0) {
          if(maxI >= arr[i][j]) break;
          if(arr[k][j] > maxI) {
            maxI = arr[k][j]
            total++
          }
          k--
        } 
        while(l >= 0) {
          if(maxJ >= arr[i][j]) break;
          if(arr[i][l] > maxJ) {
            maxJ = arr[i][l]
            total++
          }
          l--
        } 
        getArr[i][j] = total
      }
    }
  }
  return getArr
}

console.log(func([[2,4,1,5,3,3]]))
console.log(func([[2,5,4,3,2,8],[9,7,5,10,10,3]]))