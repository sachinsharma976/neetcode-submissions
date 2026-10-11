class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const hash = {};
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                if (cell === ".") {
                    continue;
                }
                if (hash.hasOwnProperty(cell)) {
                    return false;
                }
                hash[cell] = true;
            }
        }
        for (let k = 0; k < 9; k++) {
            const colHash = {};
            for (let l = 0; l < 9; l++) {
                const cell = board[l][k];
                if (cell === ".") {
                    continue;
                }
                if (colHash.hasOwnProperty(cell)) {
                    return false;
                }
                colHash[cell] = true;
            }
        }
        for (let m = 0; m < 9; m += 3) {
            for (let n = 0; n < 9; n += 3) {
                const seen = new Set();
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const cell = board[m + r][n + c];

                        if (cell === ".") {
                            continue;
                        }

                        if (seen.has(cell)) {
                            return false;
                        }

                        seen.add(cell);
                    }
                }
            }
        }
        return true;
    }
}
