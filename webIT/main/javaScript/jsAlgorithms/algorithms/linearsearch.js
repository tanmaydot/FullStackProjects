function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Element found at index i
    }
  }
  return -1; // Element not found
}

// Example usage
const array = [4, 2, 7, 1, 5];
const target = 7;
console.log(linearSearch(array, target)); // Output: 2
