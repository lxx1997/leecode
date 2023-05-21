class MaxHeap {
  constructor(compareFunc = (a, b) => a > b) {
    this.compare = compareFunc;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.size - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare(this.heap[currentIndex], this.heap[parentIndex])) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.size) {
      let largestIndex = currentIndex;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      if (leftChildIndex < this.size && this.compare(this.heap[leftChildIndex], this.heap[largestIndex])) {
        largestIndex = leftChildIndex;
      }
      if (rightChildIndex < this.size && this.compare(this.heap[rightChildIndex], this.heap[largestIndex])) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[currentIndex]];
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }
}

var rearrangeBarcodes = function(barcodes) {
    const count = new Map();
    for (const b of barcodes) {
        if (!count.has(b)) {
            count.set(b, 0);
        }
        count.set(b, count.get(b) + 1);
    }
    const pq = new MaxHeap((a, b) => a[0] > b[0] || (a[0] === b[0] && a[1] > b[1]));
    for (const [k, v] of count.entries()) {
        pq.add([v, k]);
    }
    const n = barcodes.length;
    const res = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        const p = pq.poll();
        const cx = p[0], x = p[1];
        if (i === 0 || res[i - 1] !== x) {
            res[i] = x;
            if (cx > 1) {
                pq.add([cx - 1, x]);
            }
        } else {
            const p2 = pq.poll();
            const cy = p2[0], y = p2[1];
            res[i] = y;
            if (cy > 1) {
                pq.add([cy - 1, y]);
            }
            pq.add([cx, x]);
        }
    }
    return res;
};