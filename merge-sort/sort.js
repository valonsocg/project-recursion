function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex <= leftArr.length - 1 && rightIndex <= rightArr.length - 1) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  for (; leftIndex <= leftArr.length - 1; leftIndex++) {
    resultArr.push(leftArr[leftIndex]);
  }

  for (; rightIndex <= rightArr.length - 1; rightIndex++) {
    resultArr.push(rightArr[rightIndex]);
  }

  return resultArr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));
