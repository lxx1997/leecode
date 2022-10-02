/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i < 9; i++) {
    let set = new Set(), set2 = new Set()
    for(let j = 0; j < 9; j++) {
      let item1 = board[i][j], item2 = board[j][i]
      if(item1 !== "." && set.has(item1)) {
        return false
      }
      if(item2 !== "." && set2.has(item2)) {
        return false
      }
      set.add(item1)
      set2.add(item2)
    }
  }
  for(let i = 0; i < 9; i += 3) {
    for(let j = 0; j < 9; j += 3) {
      let set = new Set()
      for(let s = i; s < i + 3; s++) {
        for(let k = j; k < j + 3; k++) {
          let item = board[s][k]
          if(item !== "." && set.has(item)) {
            return false
          }
          set.add(item)
        }
      }
    }
  }
  return true
};

console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]))