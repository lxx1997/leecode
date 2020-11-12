// 是否是山脉数组
// var validMountainArray = function(a) {
//   let i = 1
//   // 是否是上升
//   let up = true
//   // 判断是否是山脉数据
//   let isMount = false
//   let max = a[0]
//   if(a.length <= 2) {
//     isMount = false
//   } else {
//     while(i < a.length) {
//       console.log(a[i] > a[i -1])
//       if(max < a[i]) {
//         max = a[i]
//       }
//       if(a[i] > a[i -1]) {
//         if(!up) {
//           isMount = false
//           break;
//         } else {
//           isMount = true
//         }
//       } else {
//         isMount = true
//       }
//       i++
//     }
//   }
//   if(max === a[0] || max === a[a.length -1]) {
//     isMount = false
//   }
//   return isMount
// };
var validMountainArray = function(a) {
  let i = 1
  let mount = []
  while(i < a.length) {
    mount.push(a[i] >= a[i -1])
    i++
  }
  if(mount.indexOf(false) !== -1 && mount.indexOf(true) !== -1) {
    let ismount = true
    let sub = 0
    mount.map(item => {
      if(item === true) {
        ismount = sub === 0
      } else if(item === false) {
        sub++
      }
    })
    return ismount
  } else {
    return false
  }
};
//  官方解答

var validMountainArray = function(A) {
  const N = A.length;
  let i = 0;

  // 递增扫描
  while (i + 1 < N && A[i] < A[i + 1]) {
      i++;
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === N - 1) {
      return false;
  }

  // 递减扫描
  while (i + 1 < N && A[i] > A[i + 1]) {
      i++;
  }

  return i === N - 1;
};

// 自我分析解题思路
// 首先先判断递增的一部分数组，然后在判断递减的一部分数据是否包含递增及相等的数据，如果包含则不是山脉数组
console.log(validMountainArray([0,1,2,4,2,1]))