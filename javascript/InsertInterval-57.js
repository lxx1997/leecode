var insert = function(intervals, newInterval) {
  function returnArray(array1, array2) {
    return [Math.min(array1[0], array2[0]), Math.max(array1[1], array2[1])]
  }
  const newArray = new Set()
  let repeat = newInterval
  if(intervals && intervals.length === 0) {
    newArray.add(repeat)
  } else {
    intervals.map(item => {
      if(item[1] < newInterval[0]) {
        newArray.add(item)
      } else if(item[0] > newInterval[1]) {
        newArray.add(repeat)
        newArray.add(item)
      } else {
        repeat = returnArray(item, repeat)
      }
    })
    newArray.add(repeat)
  }
  return Array.from(newArray)
};
let intervals = [[1,3],[6,9]]
let newInterval = [2,5]
console.log(insert(intervals, newInterval))