// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

var merge = function(intervals) {
  intervals = intervals.sort((a,b) => {
    if(a[0] - b[0] === 0) {
      return a[1] - b[1]
    }
    return a[0] - b[0] 
  })
  for (let i = 1; i < intervals.length; i++) {
    let pre = intervals[i-1]
    let next = intervals[i]
    if((next[0] - pre[1] <= 0 && next[1] >= pre[0])){
      intervals[i-1] = [Math.min(next[0], pre[0]), Math.max(next[1], pre[1])]
      intervals.splice(i,1)
      i--
    }
  }
  return intervals
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))