module.exports = function check(str, bracketsConfig) {

  let balance = [];
  let right = [];
  let left = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    balance.push(0);
    right.push(bracketsConfig[i][1]);
    left.push(bracketsConfig[i][0]);
  }

  for (let i = 0; i < str.length; i++) {
    let index = getPosition(str[i], bracketsConfig);
    if (str[i] === bracketsConfig[index][0]) balance[index]++;

    if (str[i] === bracketsConfig[index][1]) balance[index]--;

    if (balance[index] < 0) return false;
  }
  return true;
}

function getPosition(bracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i].indexOf(bracket) !== -1)
      return i;
  }
  return -1;
}


