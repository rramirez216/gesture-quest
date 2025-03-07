function shuffleArray(arr) {
  let copyArr = [...arr];
  let newArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let randomNum = Math.floor(Math.random() * arrLength);
    let arrItem = copyArr[randomNum];
    copyArr.splice(randomNum, 1);
    newArr.push(arrItem);
    arrLength -= 1;
  }
  return newArr;
}
function nextMultipleOfFive(str, num) {
  let firstChar = str[0];
  if (firstChar == "-") {
    return Math.floor(num / 5) * 5;
  }
  if (firstChar == "+") {
    return Math.ceil(num / 5) * 5;
  }
}

export { shuffleArray, nextMultipleOfFive };
