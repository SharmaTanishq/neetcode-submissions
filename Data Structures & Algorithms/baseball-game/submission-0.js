class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let score = 0;
        let stack = [];
        for(const ops of operations){
            if(ops === '+'){
                const top = stack.pop();
                const plus_op_value = top + stack[stack.length -1];
               
                stack.push(top)
                stack.push(plus_op_value);
               
                
            }else if (ops === 'C'){
                stack.pop()

            }else if (ops === 'D'){
                stack.push(2*stack[stack.length-1])
            }else{
                stack.push(parseInt(ops))
            }
        }
         return stack.reduce((a, b) => a + b, 0);
    }
}
