export const equals = (thisArr, thatArr) =>
  thisArr.length === thatArr.length &&
    thisArr.every(x => thatArr.includes(x));
