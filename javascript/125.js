var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLocaleLowerCase()
  let left = 0, right = s.length - 1
  while(left < right) {
    if(s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
};