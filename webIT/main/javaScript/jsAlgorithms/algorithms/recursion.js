//Recursion is a concept, so there is no specific code to demonstrate it. However, here's an example of a recursive function to calculate the factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
