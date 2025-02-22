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

function roundToNearestTen(str, num) {
  let firstChar = str[0];
  if (firstChar == "-") {
    return Math.floor(num / 10) * 10;
  }
  if (firstChar == "+") {
    return Math.ceil(num / 10) * 10;
  }
}

export { shuffleArray, roundToNearestTen };
