var StockSpanner = function() {
  this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.stack.push(price)
  for(let i = this.stack.length - 1; i >= 0; i--) {
    let item = this.stack[i]
    if(item > price) {
      return this.stack.length - i - 1
    }
  }
    return this.stack.length
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */