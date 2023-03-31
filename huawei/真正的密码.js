const truePassword = (arr) => {
  arr = arr.sort((a,b) => a[0].charCodeAt() - b[0].charCodeAt())

  const compare = (str1, str2) => {

    for(let i = 0; i < str1.length; i++) {
      if(str1[i].charCodeAt() < str2[i].charCodeAt()) {
        return false
      }
    }
    return true
  }
  arr = arr.reduce((total, item) => {
    let length = total.length
    if(!length) {
      total = [item]
    } else {
      last = total[length - 1]
      if(last[0] === item[0]) {
        if(item.length > last.length) {
          total[length - 1] = item
        } else if(last.length === item.length && last !== item) {
          if(!compare(last, item)) {
            total[length - 1] = item
          }
        }
      } else {
        total = [...total, item]
      }
    }
    return total
  }, [])
  let password = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if(password.length < arr.length) {
      password = arr[i]
    } else if(password.length === arr[i].length) {
      if(!compare(password, arr[i])) {
        password = arr[i]
      }
    }
  }
  return password
}

console.log(truePassword(['h','he', 'hel', 'hell', 'hello', 'o', 'ok', 'n', 'ni', 'nin', 'ninj', 'ninja', "ninka"]))