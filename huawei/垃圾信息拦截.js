const func = (arr, n) => {
  let user = new Set()
  let sendM = new Map()
  for(let i = 0; i < arr.length; i++) {
    let send = arr[i]
    user.add(send[0])
    user.add(send[1])
    if(sendM.has(send[0])) {
      sendM.set(send[0], sendM.get(send[0]).concat([send[1]]))
    } else {
      sendM.set(send[0], [send[1]])
    }
  }
  let userSend = sendM.get(n) || [] // 获取指定角色发送邮件项目
  let useSendSet = new Set(userSend)
  let userRequire = []
  let userRequireNum = 0
  for(let value of sendM) {
    let [index, item] = value
    if(index !== n && item.indexOf(n) !== -1) {
      userRequire.push(index)
      for(let i = 0 ; i < item.length; i++) {
        if(item[i] === n) {
          userRequireNum++
        }
      }
    } 
  }

  const  checkType3  = () => {
    for(let value of user) {
      if(value !== n) {
        let nSv = userSend.filter(i => i === value).length
        let vsn = sendM.has(value) ? sendM.get(value).filter(i => i === n).length : 0
        if(nSv - vsn > 5) {
          return true
        }
      }
    }
    return false
  }
  if(useSendSet.size - userRequire.length > 5 || userSend.length - userRequireNum > 10 || checkType3()) {
    return [true, useSendSet.size - userRequire.length, userSend.length - userRequireNum]
  }

  return [false, useSendSet.size ? useSendSet.size - userRequire.length : 0, userSend.length - userRequireNum]
}

console.log(func([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[14,1],[1,15]], 1))
console.log(func([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[14,1],[1,15]], 2))