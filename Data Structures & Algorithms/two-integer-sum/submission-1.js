class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //3,4,5,6
        for(let i = 0; i<nums.length; i++){
            const temp = nums[i];
            for(let l =i+1; l<nums.length;l++){
                if(temp + nums[l] === target){
                    console.log(i,l)
                    return [i,l]
                }
            }

        }
        return [];
    }
}
