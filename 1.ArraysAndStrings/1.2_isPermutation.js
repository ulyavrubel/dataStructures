// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

function isPermutation(str1, str2) {
  if (str1 === str2) {
    return false;
  }

  if (str1.length != str2.length) {
    return false;
  } else {
    function hashTable(str) {
      let storage = [];
      for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i);
        if (storage[index] === undefined) {
          storage[index] = str[i];
        } else {
          storage[index] += str[i];
        }
      }
      return storage;
    }
    let ht1 = hashTable(str1);
    let ht2 = hashTable(str2);
    for (let i = 0; i < ht1.length; i++) {
      if (ht1[i] != ht2[i]) {
        return false;
      }
    }
    return true;
  }
}

isPermutation("string  s", "ing  strs");
