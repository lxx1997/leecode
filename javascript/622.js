var MyCircularQueue = function(k) {
    this.queue = []
    this.length = k
    this.index = 0
};
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.index < this.length) {
        this.queue.push(value)
        this.index++
        return true
    }
    return false
};

MyCircularQueue.prototype.deQueue = function() {
    if(this.index > 0) {
        this.queue.shift()
        this.index--
        return true
    }
    return false
};

MyCircularQueue.prototype.Front = function() {
    if(this.index > 0) {
        return this.queue[0]
    }
    return -1
};

MyCircularQueue.prototype.Rear = function() {
    if(this.index > 0) {
        return this.queue[this.index - 1]
    }
    return -1
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.index === 0
};

MyCircularQueue.prototype.isFull = function() {
    return this.index === this.length
};
