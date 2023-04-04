// https://leetcode.com/problems/optimal-partition-of-string/

const partitionString = str => {
  let arr = [];
  let numPartitions = 1;

  for (let letter of str) {
    if (!arr[letter]) {
      arr[letter] = 1;
      continue;
    }

    numPartitions++;
    arr = [];
    arr[letter] = 1;
  }

  return numPartitions;
}
