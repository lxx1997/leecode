/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let people = new Array(scores.length).fill(0)

    for(let i = 0; i < scores.length; i++) {
      people[i] = [ages[i], scores[i]]
    }

    people = people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

    let dep = new Array(scores.length).fill(0)

    let max = 0
    for(let i = 0; i < scores.length; i++) {
      for(let j = i; j >= 0; j--) {
        if(people[j][1] <= people[i][1]) {
          dep[i] = Math.max(dep[i], dep[j])
        }
      }
      dep[i] += people[i][1]
      max = Math.max(dep[i], max)
    }
    return max
};