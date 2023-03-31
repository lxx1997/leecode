class PrintFile {
  constructor() {
    this.list = new Array(5).fill(0).map(item => {
      return new Array(10).fill(0).map(item => new Array())
    })
  }
  input(text) {
    let arr = text.split(" ")
    if(arr[0] === "IN") {
      // 输入
      this.add(+arr[1], +arr[2], arr[3])
    } else if(arr[0] = "OUT") {
      // 输出
      return this.outPt(+arr[1])
    }
  }

  add(p, number, content) {
    console.log(p, number, content)
    this.list[p][number - 1].push(content)
  }

  outPt (p) {
    console.log(p)
    let outPut = undefined
    const print = this.list[p]
    for(let i = print.length - 1; i >= 0; i--) {
      if(print[i].length > 0) {
        outPut = print[i].shift()
        return outPut
      }
    }
    return outPut
  }
}

const printList = new PrintFile()
printList.input("IN 3 8 HHHH1")
printList.input("IN 2 8 HHHH2")
printList.input("IN 1 8 HHHH3")
printList.input("IN 3 9 HHHH4")
printList.input("IN 3 3 HHHH5")
console.log(printList.input("OUT 3"))
console.log(printList.input("OUT 3"))
console.log(printList.input("OUT 2"))
console.log(printList.input("OUT 1"))
console.log(printList.input("OUT 3"))
