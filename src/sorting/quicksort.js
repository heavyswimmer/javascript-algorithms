function quickSort(arr) {
  if (arr.length < 2) return arr;
  
  const pivot = [arr[0]];
  const less = [];
  const greater = [];

  for (let i of arr) {
    if (i < pivot) {
      less.push(i);
    }
    else if (i > pivot) {
      greater.push(i);
    }
    else {
      pivot[0].replace = i;
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
}

const sorted = quickSort([7, 4, 1, 3, 5, 9]);
console.log(sorted);
