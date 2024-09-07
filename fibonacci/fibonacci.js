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

console.log(fibs(8));

function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) return arr;

  let a = arr[arr.length - 2];
  let b = arr[arr.length - 1];
  let c = a + b;
  arr.push(c);
  return fibsRec(n, arr);
}

console.log(fibsRec(8));
