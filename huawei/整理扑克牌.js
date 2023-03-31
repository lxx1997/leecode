const card = (arr) => {
  const typeOptions = {
    "1": "zhadan",
    "2": "hulu",
    "3": "sanzhang",
    "4": "duizi",
    "5": "danzhang"
  }
  // let cardList = []
  // arr = arr.sort((a, b) => b - a)
  // let selectArr = new Array(arr.length).fill(0)
  // let cards = []
  // for(let i = 0; i < arr.length; i++) {
  //   if(cards.length) {
  //     cards.push(arr[i])
  //   } else 
  // }
  arr = arr.sort((a, b) => b - a)
  let hash = new Map() 
  for(let i = 0; i < arr.length; i++) {
    if(hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1)
    } else {
      hash.set(arr[i], 1)
    }
  }
  const type1 = hash.entries().filter(([item, value]) => value >= 4)
  const type3 = hash.entries().filter(([item, value]) => value === 3)
  const type4 = hash.entries().filter(([item, value]) => value === 2)
  const type5 = hash.entries().filter(([item, value]) => value === 1)
  const type2 = []
  for(let i = 0; i < type3.length; i++) {
    if(type5.length) {
      let add = []
      if(type5.length >= 2) {
        add = [...type5.slice(0, 2)]
      } else if(type5.length > 0) {
        if(type4.length) {
          add = [...new Array(type4[i][1]).fill(type4[i][0])]
        } else {
          // 就从type 3 来剪
          if(type) {}
        }
      }
      type2.push([...new Array(type3[i][1]).fill(type3[i][0])])
      type3.splice(i, 1)
      i--
    }
  }
}