const func = (str) => {
  const stack = []
  let num = ""
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "{") {
      if(num) {
          let st = stack.pop()
          stack.push(st.repeat(+num))
          num = ""
      }
      stack.push(str[i])
    } else if(str[i] === "}") {
      if(num) {
          let st = stack.pop()
          stack.push(st.repeat(+num))
          num = ""
      }
      let s = ""
      let item = stack.pop()
      while(item !== "{") {
        s = item + s
        item = stack.pop()
      }
      stack.push(s)
    } else if(isNaN(+str[i])) {
      if(num) {
          let st = stack.pop()
          stack.push(st.repeat(+num))
          num = ""
      }
      stack.push(str[i])
    } else {
      num += str[i]
    }
  }
  if(num) {
    let st = stack.pop()
    stack.push(st.repeat(+num))
    num = ""
  }
  return stack
}

console.log(func("{A3B1{C}3}3"))