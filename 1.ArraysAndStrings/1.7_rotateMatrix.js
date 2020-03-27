// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

//book's solution
function rotate(matrix) {
  if (matrix.length == 0 || matrix.length !== matrix[0].length) {
    return false;
  }
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}
// rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

//my solution - not working :)
function rotate(arr) {
  let n = Math.sqrt(arr.length);
  if (n % 1 !== 0) {
    return "not an NxN matrix";
  }

  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(arr.splice(0, n));
  }
  console.log(matrix);
  let result = [...matrix];
  let arr1 = [];
  for (let i = n - 1; i >= 0; i--) {
    arr1.push(i);
  }
  console.log(arr1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let l = n - 1;

      result[i][j] = matrix[l - j][j];
    }
  }

  return result;
}

rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

rotate([
  "a",
  "a",
  "a",
  "a",
  "b",
  "b",
  "b",
  "b",
  "c",
  "c",
  "c",
  "c",
  "d",
  "d",
  "d",
  "d"
]);
