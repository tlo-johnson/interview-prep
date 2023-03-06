// https://leetcode.com/problems/can-place-flowers/

const canPlaceFlowers = (flowerbed, numFlowers) => {
  let count = 0;
  for (let index = 0; index <= flowerbed.length - 1; index++) {
    if (!flowerbed[index - 1] && !flowerbed[index] && !flowerbed[index + 1]) {
      count++;
      flowerbed[index] = 1;
    }
  }
  return count >= numFlowers;
}
