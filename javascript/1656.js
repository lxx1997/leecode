var OrderedStream = function(n) {
    this.stream = new Array(n + 1).fill(0)
    this.ptr = 1
    this.length = n + 1
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey] = value
    if(this.stream[this.ptr]) {
        const arr = []
        for(let i = this.ptr; i < this.length; i++) {
            if(!this.stream[i]) {
                this.ptr = i
                return arr
            }
            arr.push(this.stream[i])
        }
        return arr;
    }
    return []
};