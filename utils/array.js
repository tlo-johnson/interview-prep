// formerly equals
export const areEquivalent = (thisArr, thatArr) =>
  thisArr.length === thatArr.length &&
    thisArr.every(x => thatArr.includes(x));

export const strictEquals = (thisArr, thatArr) => {
  for (let index = 0; index < thisArr.length; index++) {
    if (thisArr[index] !== thatArr[index]) {
      return false;
    }
  }

  return thisArr.length === thatArr.length;
}
