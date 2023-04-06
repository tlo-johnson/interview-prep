// https://leetcode.com/problems/minimize-maximum-of-array/editorial/

const minimizeArrayValue = (nums) => {
	let sum = result = nums[0];
	for (let index = 1; index < nums.length; index++) {
		sum += nums[index];
		const ideal = Math.ceil(sum / (index + 1));
		result = Math.max(result, ideal);
	}
	return result;
}
