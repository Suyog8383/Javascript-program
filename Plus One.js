let digits = [4, 3, 2, 1];

function plusOne(digits) {
  let arr = "";
  for (let i = 0; i < digits.length; i++) {
    arr += digits[i];
  }

  let num = +arr + 1;

  const arrayOfDigits = Array.from(String(num), Number);

  return arrayOfDigits;
}

console.log("@SN ", plusOne(digits));
