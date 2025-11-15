const floors = 10;

for (let i = 0; i < floors; i++) {
  let string = "";

  for (let f = 0; f <= i; f++) {
    string += "*";
  }

  console.log(string);
}

console.log("___________________________________");

const floorsSecond = 10;

for (let i = floorsSecond - 1; i >= 0; i--) {
  let string = "";

  for (let f = 0; f <= i; f++) {
    string += "*";
  }

  console.log(string);
}

console.log("___________________________________");

const floorsThirdAndQuantity = 10;

for (let i = floorsThirdAndQuantity - 1; i >= 0; i--) {
  let string = "";

  for (let i = 0; i < floorsThirdAndQuantity; i++) {
    string += "*";
  }

  console.log(string);
}

console.log("___________________________________");

const floorsLast = 10;

for (let i = 0; i < floorsLast; i++) {
  let string = "";

  for (let f = 0; f <= i; f++) {
    string += "* ";
  }

  console.log(string.trim());
}

console.log("___________________________________");

console.log("( )_( )");
console.log("(='.'=)");
console.log("(``)_(``)");

console.log("___________________________________");

console.log("( )_( )");
console.log("(=O.o=)");
console.log("(``)_(``)");

console.log("___________________________________");

let result = 0;

for (let i = 0; i <= 50; i++) {
  result += i;
  console.log(result);
}

const n = 50;

console.log((n * (n + 1)) / 2);

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

const newNumbers = numbers.forEach((number, index) => {
  numbers[index] = number + 1;
});

console.log(numbers);

const word = "programación";
const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let count = 0;

for (let index = 0; index < word.length; index++) {
  const element = word[index];

  if (vowels.includes(element.toLowerCase())) {
    count++;
  }
}

console.log(count);
