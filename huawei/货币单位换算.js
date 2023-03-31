const exchange = (arr) => {
  let total = 0

  const changeToCNY = (extra, number) => {
    console.log(extra, number)
    switch (extra) {
      case "JPY":
        return changeToCNY("CNY", number * 100 / 1825)
      case "HKD":
        return changeToCNY("CNY", number * 100 / 123)
      case "EUR":
        return changeToCNY("CNY", number * 100 / 14)
      case "GBP":
        return changeToCNY("CNY", number * 100 / 12)
      case "CNY":
        return changeToCNY("fen", number * 100)
      case "cents":
        return changeToCNY("HKD", number / 100)
      case "sen":
        return changeToCNY("JPY", number / 100)
      case "eurocents":
        return changeToCNY("EUR", number / 100)
      case "pence":
        return changeToCNY("GBP", number / 100)
      default:
        return Math.floor(number)
    }
  }
  for(let i = 0; i < arr.length; i++) {
    let number = "", extra = ""
    let coin = arr[i]
    for(let j = 0; j < coin.length; j++) {
      let s = +coin[j]
      if(isNaN(s)) {
        extra += coin[j]
      } else {
        if(extra) {
          total += changeToCNY(extra, +number)
          number = coin[j]
          extra = ""
        } else {
          number += coin[j]
        }
      }
    }
    if(extra && number) {
      total += changeToCNY(extra, + number)
    }
  }
  return total
}

console.log(exchange(["100CNY"]), 10000)
console.log(exchange(["100CNY100fen"]), 10100)
console.log(exchange(["100JPY100sen"]), 10100)