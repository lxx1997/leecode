/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
  let textArr = text.split(" ")
  let space = textArr.length - 1
  textArr = textArr.filter(item => item)
  if(textArr.length === 1) {
      return textArr[0] + " ".repeat(space)
  }
  const mod = space % (textArr.length - 1)
  const l = (space - mod) / (textArr.length - 1)
  return textArr.join(" ".repeat(l)) + " ".repeat(mod)
};