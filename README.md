# Recursion Practice Project

This project implements the Fibonacci sequence and Merge Sort algorithm using both iterative and recursive approaches.

## Fibonacci Sequence

### Iterative Implementation

File: `fibonacci.js`

```javascript
function fibs(n) {
  let newArr = [0, 1];
  let a = 0;
  let b = 1;

  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    newArr.push(c);
  }
  return newArr;
}
```

This function takes a number `n` and returns an array containing `n` numbers from the Fibonacci sequence.

Example:

```javascript
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

### Recursive Implementation

File: `fibonacci.js`

```javascript
function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) return arr;

  let a = arr[arr.length - 2];
  let b = arr[arr.length - 1];
  let c = a + b;
  arr.push(c);
  return fibsRec(n, arr);
}
```

This function solves the same problem as `fibs`, but uses recursion.

Example:

```javascript
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## Merge Sort

File: `mergeSort.js`

```javascript
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
```

This implementation uses a recursive merge sort methodology to sort an array.

Examples:

```javascript
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
```

## Testing

To test these functions, you can use various input lengths:

```javascript
console.log(fibs(8));
console.log(fibsRec(8));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
```

Feel free to modify and expand upon these implementations as needed for your project!
