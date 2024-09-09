function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

// Example usage
const array = [4, 2, 7, 1, 5];
console.log(insertionSort(array)); // Output: [1, 2, 4, 5, 7]
