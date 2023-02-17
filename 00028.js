// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
  let arr = num.split("");
  let obj = {};

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i].toLowerCase() == "a") {
      obj["indexOfA"] = i;
    }
    if (arr[i].toLowerCase() == "b") {
      obj["indexOfB"] = i;
    }
    if (Math.abs(obj["indexOfA"] - obj["indexOfB"]) > 3) {
      return true;
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon nd met")); // false
