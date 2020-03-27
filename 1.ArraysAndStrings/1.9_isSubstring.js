// 1.9 String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

function isSubstring(str1, str2) {
  let arr = [];
  for (i = 1; i < str1.length; i++) {
    let firstPart = str1.slice(0, i);
    let secondPart = str1.slice(i);
    arr.push(secondPart + firstPart);
  }
  if (arr.includes(str2)) {
    return true;
  }

  return false;
}

isSubstring("shoppsing", "ingshopp");

//short solution
function isSubstring(str1, str2) {
  if ((str1 + str1).includes(str2)) {
    return true;
  }
  return false;
}

isSubstring("waterbottle", "bottlewater");
