const excelTotal = (excel, checked) => {
    const map = new Map()
    for(let i = 0; i < 20; i++) {
      map.set(String.fromCharCode(i + "A".charCodeAt()), i)
    }
    let arr = []
    const checkExcelItem = (str) => {
      if(!isNaN(+str)) {
        return 1 // 数字
      } else if(str.indexOf("+") !== -1) {
        return 2 // 加
      } else if(str.indexOf("-") !== -1) {
        return 3 // 减
      } else {
        return 4 // 等于
      }
    }

    const getPosition = (str) => {
      if(isNaN(+str)) {
        let arr = [map.get(str[0]), +str.substring(1) - 1]
        return excel[arr[1]][arr[0]]
      }
      return +str
    }
    const getPositionPoint = (str) => {
        let arr = [map.get(str[0]), +str.substring(1) - 1]
        return arr
    }
    for(let i = 0; i < excel.length; i++) {
      arr[i] = []
      for(let j = 0; j < excel[i].length; j++) {
        let item = excel[i][j]
        let check = checkExcelItem(item)
        let ite = ""
        let ite1 = []
        let ite2 = []
        switch(check) {
          case 1:
            arr[i][j] = +item
            break;
          case 2:
            ite = item.substring(1).split("+");
            arr[i][j] = getPosition(ite[0]) + getPosition(ite[1])
            break;
          case 3:
            ite = item.substring(1).split("-")
            ite1 = getPosition(ite[0])
            ite2 = getPosition(ite[1])
            arr[i][j] = getPosition(ite[0]) - getPosition(ite[1])
            break;
          case 4:
            arr[i][j] = getPosition(item.substring(1))
            break
        }
      }
    }
    console.log(arr)
    const checkStr = checked.split(":")
    let start = getPositionPoint(checkStr[0])
    let end = getPositionPoint(checkStr[1])
    let total = 0
    for(let i = start[1]; i <= end[1]; i++) {
      for(let j = start[0]; j <= end[0]; j++) {
        total += +arr[i][j]
      }
    }
    return total
}

console.log(excelTotal([
  [10, 12, "=C5"],
  [15,5,6],
  [7,8, "=3+C2"],
  [6, "=B2-A1", "=C2"],
  [7,5,3]
], "B2:C4"))