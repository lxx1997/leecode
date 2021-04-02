// 341. 扁平化嵌套列表迭代器
// 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
// 列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

// nestedList= {
//    _integer: null,
//    _list: []
// }
var NestedIterator = function(nestedList) {
  this.list = flatNestedIterator(nestedList, [])
  console.log(this.list.length)
  this.index = 0
};

function flatNestedIterator(nestedList, list) {
  nestedList.map(item => {
    if(item.isInteger()) {
      list.push(item.getInteger())
    } else {
      flatNestedIterator(item.getList(), list)
    }
    return item
  })
  return list
}
/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.index !== this.list.length
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.list[this.index++]
};

var i = new NestedIterator([[1,1],2,[1,1]]), a = []
while(i.hasNext()) {
  a.push(i.next())
}
console.log(a)