// 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
// steps at a time. Implement a method to count how many possible ways the child can run up the
// stairs.

function countWays(n) {
  let combinations = [];

  function calculateWays(m) {
    if (m < 0) {
      return 0;
    }
    if (m === 0) {
      return 1;
    }
    if (combinations[m] === undefined) {
      combinations[m] =
        calculateWays(m - 1) + calculateWays(m - 2) + calculateWays(m - 3);
    }
    return combinations[m];
  }

  calculateWays(n);
  return combinations[n];
}

countWays(3);
