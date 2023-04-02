// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

const successfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);

  const result = [];
  for (let spell of spells) {
    const potionReqd = Math.ceil(success / spell);
    const index = findIndex(potions, potionReqd);
    result.push(potions.length - index);
  }

  return result;
}

const findIndex = (potions, potionReqd) => {
  let left = 0; right = potions.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (potions[mid] < potionReqd) {
      left = mid + 1;
      continue;
    }

    right = mid;
  }

  return left;
}
