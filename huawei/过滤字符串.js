const filterString = (number, filter) => {
  const stringMap = {
    "0": ["a", "b", "c"],
    "1": ["d", "e", "f"],
    "2": ["g", "h", "i"],
    "3": ["j", "k", "l"],
    "4": ["m", "n", "0"],
    "5": ["p", "q", "r"],
    "6": ["s", "t"],
    "7": ["u", "v"],
    "8": ["w", "x"],
    "9": ["y", "z"]
  }
  let strings = []
  let string = number + ""
  for(let i = 0; i < string.length; i++) {
    let map = stringMap[string[i]]
    if(strings.length) {
      strings = map.reduce((total, item) => {
        for(let i = 0; i < strings.length; i++) {
          str = strings[i] + item
          if(str.indexOf(filter) === -1) {
            total.push(str)
          }
        }
        return total
      }, [])
    } else {
      strings = map
    }
  }
  return strings
}

console.log(filterString(78, "uw"))