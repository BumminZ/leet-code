// This code beats 95.28% of users with JavaScript

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const num3 = nums1.concat(nums2).sort((a, b) => a - b);
  const l = num3.length;

  if (num3.length % 2 != 0) {
    const median = num3[(l - 1) / 2];
    return median;
  }

  const median = (num3[l / 2 - 1] + num3[l / 2]) / 2;
  return median;
};

const result = findMedianSortedArrays([1, 3], [2]);
