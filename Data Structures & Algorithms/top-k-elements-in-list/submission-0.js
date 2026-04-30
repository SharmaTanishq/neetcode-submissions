class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        
        for (let number_key of nums){                       
            obj[number_key] = (obj[number_key] || 0) + 1
        }

        

        const arr = Object.entries(obj).map(([num,freq])=>
        [
            freq,
            parseInt(num)
        ]
        )
        arr.sort((a,b)=> b[0] - a[0])

        return arr.slice(0, k).map((pair) => pair[1])
    }
}
