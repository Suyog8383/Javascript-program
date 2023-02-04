let arr1 = [1, 2, 3, 6];
let arr2 = [3, 4, 5];

function MinimumCommonValue(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1[i];
      }
    }
  }
  return;
}
console.log(MinimumCommonValue(arr1, arr2));
