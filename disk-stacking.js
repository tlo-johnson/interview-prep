// https://www.algoexpert.io/questions/disk-stacking
// time: O(n^2)
// space: O(n)

// const [width, depth, height] = disk
function diskStacking(disks) {
  const result = helper(disks);
  return result.disks;
}

const helper = (disks, memo = {}) => {
  const key = JSON.stringify(disks);
  if (key in memo) return memo[key];

  let max = { height: 0, disks: [] };

  for (let disk of disks) {
    const stack = helper(disks.filter(d => d !== disk), memo);
    const maximized = maximizeHeight(stack, disk);
    if (maximized.height > max.height) max = maximized;
  }

  memo[key] = max;
  return max;
}

const maximizeHeight = (stack, disk) => {
  const [width, depth, height] = disk;
  const [stackWidth, stackDepth, stackHeight] = stack.disks.length ? stack.disks[stack.disks.length - 1] : [0, 0, 0];

  return (width > stackWidth && depth > stackDepth && height > stackHeight) ?
    { height: stack.height + height, disks: [...stack.disks, disk] } :
    height > stack.height ? { height, disks: [disk] } :
    stack;
}

// Do not edit the line below.
exports.diskStacking = diskStacking;
