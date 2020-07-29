// Magic Index: A magic index in an array A [ 0 ••• n -1] is defined to be an index such that A[ i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
// FOLLOW UP
// What if the values are not distinct?

//solution 1
function magicIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }
  return "no magic";
}

magicIndex([3, 4, 5, 3, 7, 54, 8, 3, 3, 3, 2, 3, 5, 6, 7, 8]);

//solution 2
function magicIndexSortedDistinct(arr) {
  return magicFast(arr, 0, arr.length - 1);
}

function magicFast(arr, start, end) {
  if (end < start) return -1;

  let mid = (start + end) / 2;

  if (arr[mid] === mid) {
    return mid;
  } else if (arr[mid] > mid) {
    return magicFast(arr, start, mid - 1);
  } else {
    return magicFast(arr, mid + 1, end);
  }
}

magicIndexSortedDistinct([-40, -20, -1, 1, 2, 3, 6, 7, 66, 99, 999]);
