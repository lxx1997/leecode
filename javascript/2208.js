// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var halveArray = function(nums) {
//   nums = nums.sort((a, b) => b-a)
//   let total = nums.reduce((total, item) => total += item, 0), step = 0, reduce = total, avage = total / nums.length / 2
//   nums = nums.filter(item => item >= avage)
//   while(reduce >= total / 2) {
//     let item = nums.shift() / 2
//     reduce -= item
//     step++
//     if(item > avage) {
//       for(let i = 0; i < nums.length; i++) {
//         if(item > nums[i]) {
//           nums.splice(i, 0, item)
//           break;
//         }
//       }
//     }
//   }
//   return step
// };

var halveArray = function(nums) {
  let q=new MaxPriorityQueue();
  nums.forEach(v=>q.enqueue(v));
  let sum=nums.reduce((p,c)=>p+c,0),t=0,num=0;
  while(t<sum/2){
      num++;
      t+=(q.front().element/2);
      q.enqueue(q.dequeue().element/2);
  }
  return num;
};