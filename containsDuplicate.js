// https://leetcode.com/problems/contains-duplicate/

//first trial solution
var containsDuplicate = function (nums) {
	let newSet = [];
	for (let i = 0; i < nums.length; i++) {
		if (newSet.includes(nums[i])) {
			return true;
		}
		newSet = newSet.concat(nums[i]);
	}

	return false;
};

var containsDuplicate = function (nums) {
	nums.sort();
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) return true;
	}
	return false;
};
