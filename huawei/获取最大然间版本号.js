const getMaxVersion = (version1, version2) => {
  let ver1 = version1.replace(/[.:]/g, " ").split(" ")
  let ver2 = version2.replace(/[.:]/g, " ").split(" ")
  for(let i = 0; i < ver1.length; i++) {
    if(isNaN(ver1[i])) {
      for(let j = 0; j < ver1[i].length; j++) {
        let a = ver1[i][j], b = ver2[i][j]
        if(a && b) {
          if(a.charcodeAt() > b.charcodeAt()) {
            return version1
          } else if(a.charcodeAt() < b.charcodeAt()) {
            return version2
          }
        } else {
          return version1
        }
      }
    } else {
      if(+ver1[i] > +ver2[i]) {
        return version1
      } else if(+ver1[i] < +ver2[i]) {
        return version2
      }
    }
  }
  return version1
}
  
  console.log(getMaxVersion("3.3.4.alph", "3.3.3.alph"))
  console.log(getMaxVersion("3.3.4.alph", "3.3.5.lph"))