// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
	if (t.length < s.length || s.length < t.length) {
		return false;
	}

	for (const i in t) {
		if (s.includes(t[i])) {
			s = s.replace(t[i], "");
		}
	}
	if (s.length === 0) {
		return true;
	}
	return false;
};
