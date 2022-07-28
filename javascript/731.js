var MyCalendarTwo = function() {
    this.calenderList = []
    this.doubleList = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(let i = 0; i < this.doubleList.length; i++) {
        let l = this.doubleList[i][0], r = this.doubleList[i][1]
        if (end > l && start < r) {
            return false
        }
    }
    for(let i = 0; i < this.calenderList.length; i++) {
        let l = this.calenderList[i][0], r = this.calenderList[i][1]
        if (end > l && start < r) {
            this.doubleList.push([Math.max(l, start), Math.min(r, end)])
        }
    }
    this.calenderList.push([start, end])
    return false
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */