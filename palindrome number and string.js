//palindrome string
let num = "121";
function palindrome(x) {
  let str = "";
  for (let i = x.length - 1; i >= 0; i--) {
    str = str + x[i];
  }
  if (str === x) {
    return true;
  }

  return false;
}
console.log(palindrome(num));
//palindrome number
let num1 = 121;
function palindrome1(x) {
  let y = x.toString();
  let str = "";
  for (let i = y.length - 1; i >= 0; i--) {
    str = str + y[i];
  }

  if (str === y) {
    return true;
  }
  return false;
}
console.log(palindrome1(num1));
