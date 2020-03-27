// 1.4Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function isPalindromPermutation(string) {
  let arr = string
    .toLowerCase()
    .split("")
    .filter(item => item !== " ");

  function hashTable(str) {
    let storage = [];
    for (i = 0; i < str.length; i++) {
      let index = str.charCodeAt(i);
      if (storage[index] === undefined) {
        storage[index] = 1;
      } else {
        storage[index]++;
      }
    }
    return storage;
  }

  let counts = hashTable(arr.join(""));
  let notEvan = counts.filter(item => item % 2 !== 0);

  if (notEvan.length === 0 || notEvan.length === 1) {
    return true;
  }
  return false;
}

isPalindromPermutation("Tact Coa");
