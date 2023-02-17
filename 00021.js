// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  let smallestNum = angka1 < angka2 ? angka1 : angka2;
  let biggestNum = angka1 > angka2 ? angka1 : angka2;

  for (i = smallestNum; i >= 1; i--) {
    if (smallestNum % i === 0 && biggestNum % i === 0) return i;
  }
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
