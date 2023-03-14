/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
 var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let totalNeedEnergy = energy.reduce((total, item) => total += item, 0)
  if(totalNeedEnergy < initialEnergy) {
    totalNeedEnergy = 0
  } else {
    totalNeedEnergy = totalNeedEnergy - initialEnergy + 1
  }
  let needExprience = 0
  for(let i = 0; i < experience.length; i++) {
    if(initialExperience <= experience[i]) {
      needExprience += experience[i] - initialExperience + 1
      initialExperience = experience[i] + 1
    }
    initialExperience += experience[i]
  }
  console.log(totalNeedEnergy, 4, needExprience, 47)
  return totalNeedEnergy + needExprience
};

console.log(minNumberOfHours(5,3,[1,4,3,2], [2,6,3,1]), 8)
console.log(minNumberOfHours(2,4,[1], [3]), 0)
console.log(minNumberOfHours(5,3,[1,4], [2,5]), 2)
console.log(minNumberOfHours(1,1,[1,1,1,1], [1,1,1,50]), 2)
