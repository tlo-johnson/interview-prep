// https://www.algoexpert.io/questions/one-edit
// time: O(min(n,m)) where n, m are lengths of strings
// space: O(1)

function oneEdit(stringOne, stringTwo, editAllowed = true) {
  let index = 0;

  while (stringOne[index] && stringTwo[index]) {
    if (stringOne[index] === stringTwo[index]) {
      index++;
      continue;
    }

    if (!editAllowed) return false;
    return oneEdit(stringOne.substring(index + 1), stringTwo.substring(index + 1), false) ||
      oneEdit(stringOne.substring(index), stringTwo.substring(index + 1), false) ||
      oneEdit(stringOne.substring(index + 1), stringTwo.substring(index), false);
  }

  return editAllowed ?
    (index === stringOne.length || index === stringOne.length - 1) && (index === stringTwo.length || index === stringTwo.length - 1) :
    (index === stringOne.length && index === stringTwo.length)
}

// Do not edit the line below.
exports.oneEdit = oneEdit;
