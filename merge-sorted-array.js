// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan&id=data-structure-i

const merge = (nums1, m, nums2, n) => {
  let curr = nums1.length - 1;
  m--;
  n--;

  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n])
      nums1[curr--] = nums1[m--];
    else
      nums1[curr--] = nums2[n--];
  }

  while (m >= 0)
    nums1[curr--] = nums1[m--];

  while (n >= 0)
    nums1[curr--] = nums2[n--];
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [1], m = 1, nums2 = [], n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [0], m = 0, nums2 = [1], n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);
