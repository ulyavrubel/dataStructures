// //1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are
// // one edit (or zero edits) away.

function oneAway(string1, string2) {
  let ins = inserted(string1.split(""), string2.split(""));
  let rem = inserted(string2.split(""), string1.split(""));
  let repl = replaced(string1.split(""), string2.split(""));
  console.log(ins, rem, repl);

  if (
    string1 === ins.join("") ||
    string2 === rem.join("") ||
    string1 === repl.join("")
  ) {
    return true;
  }
  return false;
}

function inserted(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== array1[i]) {
      array2.splice(i, 1);
    }
  }
  return array2;
}

function replaced(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== array1[i]) {
      array2[i] = array1[i];
      break;
    }
  }
  return array2;
}

oneAway("apple", "aple");
