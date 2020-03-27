// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

function isUnique(str) {
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] === newArr[j]) {
        console.log(`${newArr[i]} === ${newArr[j]}`);
        return false;
      }
    }
  }
  return true;
}

isUnique("stnringni");

//using hash table

function isUnique(string) {
  let storage = [];
  for (let i = 0; i < string.length; i++) {
    let index = string.charCodeAt(i);
    if (storage[index]) {
      return false;
    } else {
      storage[index] = true;
    }
  }
  return true;
}

hashTable("stringi");
