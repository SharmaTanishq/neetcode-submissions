class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);

        let longest = 0;
        let current = nums.length>0?1:0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue; // skip duplicates
            }

            if (nums[i] === nums[i - 1] + 1) {
                current++;
            } else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }

        return Math.max(longest, current);
    }
}
