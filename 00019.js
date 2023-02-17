// Mengelompokkan Hewan

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya.
// Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  // you can only write your code here!
  let obj = {};
  animals.forEach(function (animal) {
    if (obj[animal[0]] !== undefined) {
      obj[animal[0]].push(animal);
    } else {
      obj[animal[0]] = [animal];
    }
  });

  let ordered = [];
  Object.keys(obj)
    .sort()
    .forEach(function (key) {
      ordered.push(obj[key]);
    });

  return ordered;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
