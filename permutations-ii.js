// https://leetcode.com/problems/permutations-ii/

const permuteUnique = (nums) => {
  nums.sort();

  const set = new Set();
  const permutations = [];

  for (let index = 0; index < nums.length; index++) {
    if (!index) {
      permutations.push([nums[index]]);
      continue;
    }

    for (let count = permutations.length; count > 0; count--) {
      const permutation = permutations.shift();
      for (let j = 0; j <= permutation.length; j++) {
        const newPermutation = [...permutation.slice(0, j), nums[index], ...permutation.slice(j)];
        const key = newPermutation.join();
        if (set.has(key)) {
          continue;
        }

        permutations.push(newPermutation);
        set.add(key);
      }
    }
  }

  return permutations;
}
