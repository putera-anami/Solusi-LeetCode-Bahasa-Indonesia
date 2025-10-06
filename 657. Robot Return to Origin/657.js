/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0; // Horizontal
    let y = 0; // Vertical

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        switch (move) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }
    }

    return x === 0 && y === 0;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));