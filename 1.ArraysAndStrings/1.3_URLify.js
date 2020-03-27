//  1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.

function urlify(string) {
  let newStr = string.trim();
  let arr = newStr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "%20";
    }
  }
  return arr.join("");
}

urlify("Mr John Smith    ");
