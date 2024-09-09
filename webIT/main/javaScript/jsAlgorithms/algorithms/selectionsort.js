function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap elements
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

// Example usage
const array = [4, 2, 7, 1, 5];
console.log(selectionSort(array)); // Output: [1, 2, 4, 5, 7]
