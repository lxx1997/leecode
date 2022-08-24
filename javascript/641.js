/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.deque = []
    this.length = k
    this.end = -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false
    this.deque.unshift(value)
    this.end++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false
    this.deque.push(value)
    this.end++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false
    this.deque.shift()
    this.end--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false
    this.deque.pop()
    this.end--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1
    return this.deque[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1
    return this.deque[this.end]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.deque.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.deque.length === this.length
};