/**
 * @param {number} capacity
 */
 var DinnerPlates = function(capacity) {
  this.stack = []
  this.maxLength = capacity
  this.unFillIndex = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
  let s = this.stack[this.unFillIndex]
  if(typeof s === "undefined") {
    this.stack.push([val])
  } else if(s.length < this.maxLength) {
    s.unshift(val)
  } else {
    for(let i = this.unFillIndex + 1; i < this.stack.length; i++) {
      let s1 = this.stack[i]
      if(s1.length < this.maxLength) {
        s1.unshift(val)
        this.unFillIndex = i
        break;
      }
    }
  }
  
  for(let i = this.unFillIndex; i < this.stack.length; i++) {
    let s1 = this.stack[i]
    if(s1.length < this.maxLength) {
      this.unFillIndex = i
      return
    }
  }
  this.unFillIndex = this.stack.length
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
  for(let i = this.stack.length - 1; i >= 0; i--) {
    let s = this.stack[i]
    if(s && s.length) {
      if(i < this.unFillIndex) {
        this.unFillIndex = i
      }
      return s.shift()
    }
  }
  return -1
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
  let s = this.stack[index]
  if(s && s.length) {
    if(index < this.unFillIndex) {
      this.unFillIndex = index
    }
    return s.shift()
  }
  return -1
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */