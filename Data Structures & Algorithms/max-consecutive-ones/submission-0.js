class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
     let maxVal = 0;
     let currentRunning = 0;

     for(let i=0 ;i<nums.length+1 ;i++){
        console.log(maxVal)
        if(nums[i] === 1){
            currentRunning++;
            maxVal = Math.max(maxVal,currentRunning);
        }else{
            currentRunning =0;
        }
     }   
        return maxVal
    }
}
