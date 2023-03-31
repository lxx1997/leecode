class sortNumAndExportMinSize {
  constructor() {
    this.list = []
    this.sortNum = 0
  }
  add(type, num) {
    if(type === "head add") {
      this.list.unshift(num)
    } else if(type === "tail add") {
      this.list.push(num)
    }
    return this.list
  }
  delete () {
    if(!this.chechIsSorted()) {
      this.sortList()
      this.sortNum++
    }
    this.list.shift()
    if(this.list.length) {
      return this.list
    } else {
      return this.sortNum
    }
  }
  // 判断缓存的数组是否已经排好序
  chechIsSorted() {
    for(let i = 1; i < this.list.length; i++) {
      if(this.list[i] < this.list[i - 1]) return false
    }
    return true
  }

  sortList () {
    this.list = this.list.sort((a, b) => a-b)
  }
}

let sort = new sortNumAndExportMinSize()
sort.add("head add", 1)
sort.add("tail add", 2)
sort.delete()
sort.add("head add", 3)
sort.delete()
sort.add("tail add", 4)
sort.delete()
sort.add("head add", 5)
sort.delete()
console.log(sort.delete())