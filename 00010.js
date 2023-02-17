// Number Palindrome

// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
// Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
// Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
// Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
// Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

function angkaPalindrome(num) {
  // you can only write your code here!
  let leftSide = 1;
  let rightSide = 2;

  while (leftSide !== rightSide) {
    num++;
    let string = num.toString();
    leftSide = string.slice(0, Math.ceil(string.length / 2));
    rightSide = string
      .slice(Math.floor(string.length / 2), string.length)
      .split("")
      .reverse()
      .join("");
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
