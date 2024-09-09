function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [4, 2, 7, 1, 5];
console.log(quickSort(array)); // Output: [1, 2, 4, 5, 7]
