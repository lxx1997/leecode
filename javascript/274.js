/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if(citations.length === 1) return citations[0] >= 1 ? 1 : 0
  if(citations.every(item => item === 0)) return 0
  citations = citations.sort((a, b) => a - b)
  for(let i = 0; i < citations.length; i++) {
    let h = citations.length - i
    if(citations[i] >= h) {
      return h
    }
  }
};