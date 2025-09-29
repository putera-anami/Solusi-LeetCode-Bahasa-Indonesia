/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentCustomerWealth = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            currentCustomerWealth += accounts[i][j];
        }

        if (currentCustomerWealth > maxWealth) {
            maxWealth = currentCustomerWealth;
        }
    }

    return maxWealth;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// const accounts1 = [[1,2,3],[3,2,1]];
// const accounts2 = [[1,5],[7,3],[3,5]];
// const accounts3 = [[2,8,7],[7,1,3],[1,9,5]];

// console.log(maximumWealth(accounts1));
// console.log(maximumWealth(accounts2));
// console.log(maximumWealth(accounts3));
