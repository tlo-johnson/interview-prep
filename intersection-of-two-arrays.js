// https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=study-plan&id=data-structure-i

const intersect = (nums1, nums2) => {
  const counts = {};
  const result = [];

  for (let num of nums1) {
    if (num in counts)
      counts[num]++;
    else
      counts[num] = 1;
  }

  for (let num of nums2) {
    if (!(num in counts) || counts[num] === 0) continue;

    counts[num]--;
    result.push(num);
  }

  return result;
};

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));

nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersect(nums1, nums2));
