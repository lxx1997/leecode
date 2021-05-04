// 690. 员工的重要性
// 给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

// 比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

// 现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let employeesHash = {}
    let length = employees.length
    for(let i = 0; i < length; i++) {
      employeesHash[employees[i].id] = employees[i]
    }
    let currentEmployee = employeesHash[id]

    function getImportance(ci, importance = 0) {
      importance += ci.importance
      if(ci.subordinates) {
        for(let i = 0; i < ci.subordinates.length; i++) {
          importance += getImportance(employeesHash[ci.subordinates[i]])
        }
      }
      return importance
    }
    return getImportance(currentEmployee)
};