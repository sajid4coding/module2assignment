
// Exercise 1: 

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [firstElement, thirdElement] = arr;

  return {
    name,
    age,
    firstElement,
    thirdElement,
  };
}


// Exercise 2:

function sumNumbers(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // 15

// Exercise 3:

function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

console.log(createGreeting('Alice')); // "Hello, Alice! Welcome to our website."

// Exercise 4:

function isEven(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEven(7)); // "Odd"

// Exercise 5:

const multiply = (a, b) => a * b;

// Exercise 6:

function getLargestNumber(a, b) {
  return a > b ? a : b;
}

console.log(getLargestNumber(10, 5)); // 10

// Exercise 7:

function getAddressCity(address) {
  return address?.city ?? 'Unknown';
}

const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address)); // "Unknown"

// Exercise 8:

function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}

console.log(doubleNumbers([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]

// Exercise 9:

function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]

// Exercise 10:

function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Exercise 11:

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8]