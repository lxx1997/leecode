/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
  let websiteHahs = {}
  for(let i = 0; i < cpdomains.length; i++) {
    let item = cpdomains[i]
    let [num, str] = item.split(" ")
    let web = str.split(".")
    for(let i = 0; i < web.length; i++) {
      let s = web.slice(i).join(".")
      if(!websiteHahs[s]) {
        websiteHahs[s] = 0
      }
      websiteHahs[s] += +num
    }
  }
  return Object.keys(websiteHahs).map(item => [websiteHahs[item], item].join(" "))
};