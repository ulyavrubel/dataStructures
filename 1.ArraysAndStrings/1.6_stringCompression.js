// 1.6 String Compression: Implement a method to perform basic string compression using the counts // of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let arr = str.split("");
  let resultArr = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      resultArr.push(arr[i]);
      resultArr.push(count);
      count = 1;
    }
  }
  if (resultArr.length < arr.length) {
    return resultArr.join("");
  } else {
    return str;
  }
}

stringCompression("aabcccccaaa");
