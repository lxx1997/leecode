function LinksNode (start, length, links) {
  let currentNode = start
  let value = undefined
  let half = Math.floor(length / 2) + 1;
  let currentLength = 0
  while(currentLength < half) {
    for(let i = 0; i < links.length; i++) {
      if(currentNode === links[i][0]) {
        value = links[i][1]
        currentNode = links[i][2]
        currentLength++
      }
    }
  }
  return value
}

console.log(LinksNode("00010", 4, [["00000",3,-1],
  ["00010",5, "12309" ],
  ["11451",6,"00000"] ,
  ["12309",7,"11451"] ]))