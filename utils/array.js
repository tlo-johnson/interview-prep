// formerly equals
export const areEquivalent = (thisArr, thatArr) => {
  if (thisArr.length !== thatArr.length) {
    return false;
  }

  return thisArr.every(x =>
    Array.isArray(x) ?
      thatArr.some(y => areEquivalent(x, y)) :
      thatArr.includes(x)
  );
}

export const strictEquals = (thisArr, thatArr) => {
  for (let index = 0; index < thisArr.length; index++) {
    if (thisArr[index] !== thatArr[index]) {
      return false;
    }
  }

  return thisArr.length === thatArr.length;
}
