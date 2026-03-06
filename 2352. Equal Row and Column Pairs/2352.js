/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const map = new Map();

    for (let r = 0; r < n; r++) {
        const key = grid[r].join(",");
        map.set(key, (map.get(key) || 0) + 1);
    }

    let count = 0;

    for (let c = 0; c < n; c++) {
        let col = [];
        for (let r = 0; r < n; r++) {
            col.push(grid[r][c]);
        }
        
        const key = col.join(",");
        if (map.has(key)) {
            count += map.get(key);
        }
    }

    return count;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
const grid1 = [
  [3,2,1],
  [1,7,6],
  [2,7,7]
];

const grid2 = [
  [3,1,2,2],
  [1,4,4,5],
  [2,4,2,2],
  [2,4,2,2]
];

console.log(equalPairs(grid1));
console.log(equalPairs(grid2));