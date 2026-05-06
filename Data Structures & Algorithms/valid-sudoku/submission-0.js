class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        //Now we run a for loop a sudoku generally have a definite number 9 for rows and columns so we don't have to assume the length

        for(let r=0;r<9;r++){
            //This is the initial loop for the rows. 
            for(let c=0; c<9;c++){
                  if (board[r][c] === '.') continue;
                //This is the initial loop for the columns;
                //At this point we can get the coordinates point by point.

                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) || //in the first rows is just empty map, we then check if rows (r) basically the index and then check if it has that value.
                    (cols.get(c) && cols.get(c).has(board[r][c])) || //the same logic applies here for column. 
                    (squares.get(squareKey) && //and we check a similar key for the squares map but whyy?
                        squares.get(squareKey).has(board[r][c]))
                ) {
                    return false; //just returns false if one of the condition fails. but it uses OR so if 1 passes and other two fails it continues
                }
                if(!rows.get(r)) (rows.set(r,new Set()));          
                if(!cols.get(c)) (cols.set(c,new Set()));          
                if(!squares.get(squareKey)) (squares.set(squareKey,new Set()));

                rows.get(r).add(board[r][c]); 
                cols.get(c).add(board[r][c]);
                squares.get(squareKey).add(board[r][c]);
            }
            
            
        }
        return true
    }
}
