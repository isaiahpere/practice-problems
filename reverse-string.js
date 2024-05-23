// Check if palindromic number

// 171 => true
// 154 => false

const isPalindrome = (x) => {
  if (+x < 0) return false;
  let numArr = x.toString().split("");
  let left = 0;
  let right = numArr.length - 1;
  let isPalindrome = true;
  for (i = 0; i < numArr.length - 1; i++) {
    if (numArr[left] !== numArr[right] && isPalindrome) {
      isPalindrome = false;
    }
    left++;
    right--;
  }
  return isPalindrome;
};

const isPalindromeTwo = (number) => {
  return Number(number) < 0
    ? false
    : Number(number) === Number(number.toString().split("").reverse().join(""));
};

console.log("isPalindromeTwo(121)", isPalindromeTwo(121));
console.log("isPalindrome(12)", isPalindromeTwo(12));
console.log("isPalindrome(1234)", isPalindromeTwo(1234));
console.log("isPalindrome(0000)", isPalindromeTwo("0000"));
