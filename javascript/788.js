var rotatedDigits = function(N) {
  let ans = 0
  const d = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1].concat(Array(Math.max(0, N - 9)).fill(0))
  for (let i = 0; i <= N; ++i) {
      if (d[Math.floor(i / 10)] == -1 || d[i % 10] == -1) {
          d[i] = -1
      } else if (d[Math.floor(i / 10)] == 1 || d[i % 10] == 1) {
          d[i] = 1
          ++ans
      }
  }
  return ans
};