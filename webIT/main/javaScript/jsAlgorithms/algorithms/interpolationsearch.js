function interpolationSearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high && target >= array[low] && target <= array[high]) {
    let position =
      low +
      Math.floor(
        ((target - array[low]) * (high - low)) / (array[high] - array[low])
      );

    if (array[position] === target) {
      return position; // Element found at position
    } else if (array[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1; // Element not found
}

// Example usage
const array = [1, 2, 4, 5, 7];
const target = 4;
console.log(interpolationSearch(array, target)); // Output: 2
