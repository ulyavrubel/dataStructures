//hash function to calculate index
//max - number of units into a hashtable
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    //sum of ASCII of each letter of the string
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function() {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    //если индекс не занят добавляем туда key, value
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      //если индекс занят проверяем его весь, есть ли там уже этот key
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          //если есть заменяем его value новым
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      //если такого key в индексе нет добавлем в индекс новую пару key, value
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash("quincy", 10));

let ht = new HashTable();

ht.add("fruit", "orange");
ht.add("grape", "blue");
ht.add("lord", "apple");
ht.add("hope", "world");
ht.add("hope", "planet");
ht.print();

ht.lookup("lord");

ht.remove("grape");
ht.print();

ht.lookup("hope");
