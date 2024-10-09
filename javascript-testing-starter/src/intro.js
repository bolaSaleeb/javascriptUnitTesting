// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}


//test driven development, meaning we write test cases first then based on these tests we gradually build our code
export function calculateAverage(numbers){
  if(numbers.length === 0) return NaN;

  const sum = numbers.reduce((sum, current)=>sum+current, 0);
  return sum/numbers.length;
}

export function calculateFactorial(num){
  if(num===0) return 1;
  if(num===1) return 1;

  return num*calculateFactorial(num-1);
}
