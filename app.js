'use strict';
/**
* retruns the factorial of given number
* Factorial is the product of all positive integers less than or equal to n
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
      }
    return result;
}
const assert = require('assert');
assert.equal(factorial(1), 1, `Test error, returned result:${factorial(1) } should be 1.`);
assert.equal(factorial(2), 2, `Test error, returned result:${factorial(2) } should be 2.`);
assert.equal(factorial(3), 6, `Test error, returned result:${factorial(3) } should be 6.`);
assert.equal(factorial(10), 3628800, `Test error, returned result:${factorial(10) } should be 3628800.`);
console.log('All the tests are successfully passed!');