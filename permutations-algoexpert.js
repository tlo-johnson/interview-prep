// https://www.algoexpert.io/questions/permutations
// time: O(n * n!)
// space: O(n * n!)

function getPermutations(arr) {
  let perms = [];
  for (let element of arr) {
    if (!perms.length) {
      perms.push([element]);
      continue;
    }

    const newPerms = [];
    for (let perm of perms) {
      for (let index = 0; index <= perm.length; index++)
        newPerms.push([...perm.slice(0, index), element, ...perm.slice(index)]);
    }
    perms = newPerms;
  }

  return perms;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
