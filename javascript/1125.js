/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  let arr = []
  const checkMaxSame = (skils, peo) => {
    return skils.filter(i => peo.includes(i)).length
  }
  while(req_skills.length) {
    let max = 0, maxpeo = -1
    for(let i = 0; i < people.length; i++) {
      if(!arr.includes(i)) {
        let l = checkMaxSame(req_skills, people[i])
        if(l > max) {
          maxpeo = i
        }
      }
    }
    if(maxpeo !== -1) {
      arr.push(maxpeo)
      req_skills = req_skills.filter(i => !people[maxpeo].includes(i))
    }
  }
  return arr.sort((a, b) => a - b)
};