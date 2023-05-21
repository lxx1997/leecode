/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
  let people = names.map((item, index) => {
      return {
          people: item,
          height: heights[index]
      }
  })
  return people.sort((a, b) => b.height - a.height).map(item =>item.people)
};