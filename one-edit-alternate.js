// https://www.algoexpert.io/questions/one-edit

function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;

  let stringOneIndex = stringTwoIndex = 0;
  let editAllowed = true;
  while (stringOne[stringOneIndex] && stringTwo[stringTwoIndex]) {
    if (stringOne[stringOneIndex++] === stringTwo[stringTwoIndex++]) continue;
    if (!editAllowed) return false;
    editAllowed = false;
    if (stringOne.length === stringTwo.length) continue;
    stringOne.length > stringTwo.length ? stringTwoIndex-- : stringOneIndex--;
  }

  // you can return true here because of the check at the start of the function
  // ensuring both strings don't differ in length by more than one.
  return true;
}

// Do not edit the line below.
exports.oneEdit = oneEdit;
