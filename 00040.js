// ==============
// Catch Me if You Can
// ==============
// Instruksi
// =========
// Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
// ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
// Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

// Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
//  - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
//  - '*' adalah jalanan biasa
//  - 'Villain' adalah pelaku kejahatan

// Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
// Contoh
// -------
// 1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
//    output: Nice work, detective! You got all villains: 2
// 2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
//    output: Ooops, you die. You got 3 villains
// 3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
//    output: Ooops, you die. You got 2 villains

// Algoritma / Pseudocode here..

// algoritma:
// 1. create a variable with the value of 0
// 2. looping 
// 3. count each traps and assign it to step 1


function test(array) {

}

console.log(test(['*', '*', '@', '*', 'Villain', '*', '@', 'Villain'])); // 'Ooops, you die. You got 1 villains'
console.log(test(['*', '*', '@', '*', 'Medicine', '@', 'Villain', '*', 'Villain', 'Villain', '@'])); // 'Ooops, you die. You got 3 villains'
console.log(test(['*', '*', '@', '*', 'Medicine', '@', 'Medicine', 'Villain', '*', 'Villain', '@', 'Villain'])); // 'Nice work, detective! You got all villains: 3'
