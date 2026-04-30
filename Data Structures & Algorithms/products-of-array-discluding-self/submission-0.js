class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const multiplied_array = []
       
        for(let i = 0;i<nums.length;i++){            
            const new_array = [...nums.slice(0,i),...nums.slice(i+1)]
            let multiplication_keeper = 1;
            for(let number of new_array){
                multiplication_keeper *= number
            }
         
            multiplied_array.push(multiplication_keeper)
        }

    return multiplied_array
}
    }
