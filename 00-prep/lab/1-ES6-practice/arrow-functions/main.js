const theOldWay = function(course) {
    return `I am currently enrolled in ${course}`;
  };

console.log('The old way:', theOldWay('Code 301'));

const theNewWay = (course) => {
    return `I am currently enrolled in ${course}`;
  };

console.log('The new way:', theNewWay('Code 301'));

const withoutParens = course => {
    return `I am currently enrolled in ${course}`;
  };
console.log('Without parens:', withoutParens('Code 301'));

const oneLiner = course => `I cam currently enrolled in ${course}`;
console.log('As a one-liner:', oneLiner('Code 301'));

const add = function(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
  };

console.log('Let\'s do some math:', add(4, 5));

const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;
console.log('Add as a one-liner:', addOneLiner(4, 5));

const multiLiner = word => {
    word = word.toUpperCase();
    return word;
  };
console.log('Multi-line arrow function:', multiLiner('hello'));

const oldObject = function(array) {
    return {
      firstValue: array[0],
      secondValue: array[1],
      thirdValue: array[2]
    };
  };

 console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?'])); 

 const newObject = array => ({
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  });
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));
