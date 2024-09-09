function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Element found at index mid
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element not found
}

// Example usage
const array = [1, 2, 4, 5, 7];
const target = 4;
console.log(binarySearch(array, target)); // Output: 2
