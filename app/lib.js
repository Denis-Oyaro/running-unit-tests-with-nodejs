/*
 * Collection of simple utility functions
 */

// Container for the utility functions
const util = {};

// Compute sum of two numbers
util.sum = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
};

// Compute quotient of two numbers (a/b)
util.quotient = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (b === 0) {
        throw new RangeError('Division by zero');
    }

    return a / b;
};

// Compute the square of a number
util.square = function (x) {
    if (typeof x !== 'number') {
        return NaN;
    }

    return x * x;
};

// Check if a string is a palindrome
util.isPalindrome = function (str) {
    if (typeof str !== 'string') {
        return false;
    }

    const midLength = Math.floor(str.length / 2);
    const lastIndex = str.length - 1;

    for (let i = 0; i < midLength; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }

    return true;
};

// Export the module
module.exports = util;
