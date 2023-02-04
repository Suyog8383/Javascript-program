let str = "suyognagawade";
function findCount(str) {
  let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    }
  }
  return obj;
}
console.log(findCount(str));
