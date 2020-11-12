var kClosest = function(points, K) {
  const newPoints = points.sort((a, b) => {
    return a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1] 
  })
  return newPoints.filter((item, index) => {
    if(index < K) {
      return item
    }
  })
};
const points = [[3,3],[5,-1],[-2,4]]
const K = 2
console.log(kClosest(points, K))