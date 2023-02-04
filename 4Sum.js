let sum = [1, 0, -1, 0, -2, 2];
let target = 0;
function find4Sum(sum, target) {
  let arr = [];
  for (let a = 0; a < sum.length; a++) {
    for (let b = 0; b < sum.length; b++) {
      for (let c = 0; c < sum.length; c++) {
        for (let d = 0; d < sum.length; d++) {
          if (sum[a] + sum[b] + sum[c] + sum[d] === target) {
            arr.push([sum[a], sum[b], sum[c], sum[d]]);
            break;
          }
        }
      }
    }
  }
  return arr;
}
console.log("@SN ", find4Sum(sum, target));
