function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  return null;
}

const arr = [1, 3, 5, 7, 9];

console.log(binarySearch(arr, 3)); // 1
console.log(binarySearch(arr, -1)); // null
