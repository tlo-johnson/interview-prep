// https://www.algoexpert.io/questions/powerset
// time: O(n^3)?
// space: O(n^2)?

function powerset(arr) {
  const allSets = [[]];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const set = [element];
    allSets.push(set);

    const integers = arr.slice(index + 1);
    helper(set, integers, allSets);
  }

  return allSets;
}

function helper(set, integers, allSets) {
  for (let index = 0; index < integers.length; index++) {
    const integer = integers[index];
    const newSet = [...set, integer];
    allSets.push(newSet);
    helper(newSet, integers.slice(index + 1), allSets);
  }
}

// Do not edit the line below.
exports.powerset = powerset;
