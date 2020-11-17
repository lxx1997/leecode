function test(value) {
  return new Promise((resolve, reject) => {
    if(value > 1) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}
async function test1() {
  let res = null
  await test(2).then(res1 => {
    res = res1
    console.log(res)
  })
  return res
}
console.log(test1())
console.log(1)