// Angka Prima

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  // you can only write your code here!
  var x = 0;
  for (var i = 2; i <= Math.floor(angka / 2); i++) {
    x++;
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
