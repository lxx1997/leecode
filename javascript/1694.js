/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
  number = number.replace(/-/g, "").split(" ").join("")
  let s = ""
  let length = number.length, remain = Math.floor(length / 3), mode = length % 3
  if(mode === 1) {
    remain--
    for(let i = 0;i < remain; i++) {
      s += number.slice(i * 3, i * 3 + 3) + "-"
    }
    s += number.slice(remain * 3, remain * 3 + 2) + "-" + number.slice(remain * 3 + 2, remain * 3 + 4)
  } else {
    for(let i = 0;i < remain; i++) {
      s += number.slice(i * 3, i * 3 + 3) + "-"
    }
    if(mode) s += number.slice(remain * 3)
    else s = s.slice(0, s.length - 1)
  }
  return s
};