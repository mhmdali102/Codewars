function positiveSum(arr) {
  let sums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sums += arr[i];
    }
  }return sums;
} 