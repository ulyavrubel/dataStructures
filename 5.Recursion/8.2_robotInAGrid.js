// 8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits" such that
// the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
// the bottom right.

function findPath(r, c, off) {
  let path = [];

  function stepRight(current) {
    console.log("right");
    return [current[0], current[1] + 1];
  }

  function stepDown(current) {
    console.log("down");
    return [current[0] + 1, current[1]];
  }

  function checkForOff(nextCell) {
    return off.every((offCell) => offCell.toString() != nextCell.toString());
  }

  function oneStep(current, off) {
    if (current[0] === r && current[1] === c) {
      return path.push("finish!!");
    } else {
      path.push(current);
      console.log(current);
      console.log(path);
      if (current[1] < c && checkForOff([current[0], current[1] + 1])) {
        current = stepRight(current);
      } else if (current[0] < r && checkForOff([current[0] + 1, current[1]])) {
        current = stepDown(current);
      }
      return oneStep(current, off);
    }
  }

  //if there is only one off cell

  // function oneStep(current, off) {
  //   if (current[0] === r && current[1] === c) {
  //     return path.push("finish!!")
  //   } else {
  //     path.push(current)
  //     console.log(current)
  //     console.log(path)
  //     if (current[1] < c && [current[0], current[1]+1].toString() != off.toString()) {
  //       current = stepRight(current)
  //     } else if (current[0] < r && [current[0]+1, current[1]].toString() != off.toString() ) {
  //       current = stepDown(current)
  //    }
  //    return oneStep(current, off)
  //   }
  // }

  oneStep([0, 0], off);

  return path;
}

findPath(6, 7, [
  [0, 3],
  [1, 5],
]);
