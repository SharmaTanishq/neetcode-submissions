class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const groups ={}
        //act
        for(let char in strs){
            console.log(char)
            const key = strs[char].split('').sort().join()

            if(!groups[key]){
                groups[key]=[]
            }

            groups[key].push(strs[char])
        }

        const result = Object.values(groups)

        return result

    }
}
