// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function setZero(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let row;
  let column;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row = i;
        column = j;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i][column] = 0;
  }
  for (let j = 0; j < n; j++) {
    matrix[row][j] = 0;
  }

  return matrix;
}

setZero([
  [1, 2, 3, 4, 5, 6],
  [5, 6, 0, 5, 7, 8],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6]
]);
