// X dan O

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  //code here
  //change everything to lower case
  //code here
  const strLower = str.toLowerCase();
  // console.log (strLower);
  const splitStr = strLower.split("");
  // console.log(splitStr);
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "o") {
      //adds count if o
      oCount = oCount + 1;
      // console.log("o", oCount)
    } else if (splitStr[i] === "x") {
      //adds count if x
      xCount = xCount + 1;
      //console.log("x", xCount)
    } //this checks for all other letters that are not x and o
    else if (splitStr[i] !== "x" || splitStr[i] !== "o") {
      //adds count to both if not x and o
      oCount = oCount + 1;
      xCount = xCount + 1;
      //console.log("oCount", oCount, "xCount", xCount)
    }
  }
  //compares the values of x and 0
  if (xCount === oCount) {
    //if they match will return true
    return true;
  } else {
    //if they don't match returns false
    return false;
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
