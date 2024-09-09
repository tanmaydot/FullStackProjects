function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

// Example usage
const array = [4, 2, 7, 1, 5];
console.log(bubbleSort(array)); // Output: [1, 2, 4, 5, 7]
