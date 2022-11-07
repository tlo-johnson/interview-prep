// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  if (!nums1.length) return calculateMedian(nums2);
  if (!nums2.length) return calculateMedian(nums1);

  return findMedianRecursive(nums1, nums2);
}

const calculateMedian = nums => {
  const midIndex = findMidIndex(nums.length);
  return isEven(nums.length) ? 
    (nums[midIndex] + nums[midIndex + 1]) / 2 :
    nums[midIndex];
}

const findMidIndex = count => {
  const index = Math.floor(count / 2);
  return isEven(count) ? index - 1 : index;
}

const isEven = number => number % 2 === 0;

const findMedianRecursive = (nums1, nums2, startIndex = 0, endIndex = nums1.length - 1) => {
  const mergedArraySize = nums1.length + nums2.length;

  const midIndex = findMidIndex(endIndex - startIndex + 1); // findMidIndex is 1-based
  const nums1Index = startIndex + midIndex;
  const nums2Index = Math.ceil(mergedArraySize / 2) - (nums1Index + 1) - 1;

  if (nums1[nums1Index] > nums2[nums2Index + 1])
    return findMedianRecursive(nums1, nums2, startIndex, midIndex - 1);
  if (nums2[nums2Index] > nums1[nums1Index + 1])
    return findMedianRecursive(nums1, nums2, midIndex + 1, endIndex);

  return (isEven(mergedArraySize)) ?
    (Math.max(nums1[nums1Index], nums2[nums2Index]) + Math.min(nums1[nums1Index + 1], nums2[nums2Index + 1])) / 2 :
    Math.max(nums1[nums1Index], nums2[nums2Index]);
}

/*
let nums1 = [1,3], nums2 = [2];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1,3], nums2 = [1, 2, 3];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1,3], nums2 = [1, 2];
console.log({ expected: 1.5, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1, 2, 3], nums2 = [1, 2];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1, 2, 3], nums2 = [1, 2, 3, 4];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1, 2, 3], nums2 = [1, 2, 3];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1,3], nums2 = [];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [], nums2 = [1, 2, 3];
console.log({ expected: 2, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1, 2, 3, 3, 4, 4, 4, 5], nums2 = [1, 2, 3, 3, 4, 4, 4];
console.log({ expected: 3, actual: findMedianSortedArrays(nums1, nums2) });
*/

nums1 = [3,4], nums2 = [1,2]
console.log({ expected: 2.5, actual: findMedianSortedArrays(nums1, nums2) });

nums1 = [1,2], nums2 = [3,4]
console.log({ expected: 2.5, actual: findMedianSortedArrays(nums1, nums2) });

/*
 *
 * if even,
 *  lower mid = Math.floor(arr.length / 2) - 1
 *  upper mid = Math.floor(arr.length / 2)
 *
 * if odd,
 *  mid = Math.floor(arr.length / 2)
 *
 * leftIndex = mid (use lower mid if even)
 * rightIndex = Math.ceil(sum / 2) - (leftIndex + 1) - 1
 *
 * leftArray[leftIndex] > rightArray[rightIndex + 1]
 *  rerun with endIndex = mid
 * rightArray[rightIndex] > leftArray[leftIndex + 1]
 *  rerun with startIndex = mid
 *
 *  if even,
 *    return (max element between leftIndex and rightIndex + min element in left over array elements) / 2
 *
 *  if odd,
 *    return max element between leftIndex and rightIndex
 *
 */
