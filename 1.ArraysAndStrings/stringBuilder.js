// A good exercise to practice strings, arrays, and general data structures is to implement your own version of
// StringBuilder, HashTable and Array List.

function StringBuilder(value) {
  this.strings = new Array("");
  this.append(value);
}

StringBuilder.prototype.append = function(value) {
  if (value) {
    this.strings.push(value);
  }
};

StringBuilder.prototype.clear = function() {
  this.strings.length = 1;
};

StringBuilder.prototype.toString = function() {
  return this.strings.join("");
};

const string = new StringBuilder("host");
string.append("long string");
string.append("short string");
string.append("last string");
string.toString();

console.log(string.toString());
