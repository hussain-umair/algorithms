const arr = [7, 3, 1, 4, 2, 6];

for (let i = 1; i < arr.length; i++) {
  let j = i;
  let pointer = i;
  while (j >= 0) {
    if (arr[pointer] < arr[j]) {
      const temp = arr[pointer];
      arr[pointer] = arr[j];
      arr[j] = temp;
      pointer = j;
    }
    j--;
  }
}

console.log("arr=> ", arr);
