/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  for(let i = 0; i < sandwiches.length; i++) {
    let end = -1
    for(let j = 0; j < students.length; j++) {
      if(sandwiches[i] === students[j]) {
        end = j
        break;
      }
    }
    if(end >= 0) {
      students = students.splice(end + 1).concat(students.splice(0, end))
    } else {
      return students.length
    }
  }
  return 0
};