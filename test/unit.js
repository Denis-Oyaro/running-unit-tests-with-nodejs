/*
 * Unit Tests
 */

//Dependencies
const util = require('../app/lib');
const assert = require('assert').strict;

// Holder for tests
const unit = {};

// Assert that the sum function returns valid results for valid parameters
unit['util.sum should return valid results for valid parameters'] = function (done) {
    // 1st pair
    let a = 4;
    let b = 3;
    let res = util.sum(a, b);
    assert.strictEqual(res, 7);

    // 2nd pair
    a = 100;
    b = 0;
    res = util.sum(a, b);
    assert.strictEqual(res, 100);

    // 3rd pair
    a = -45;
    b = 67;
    res = util.sum(a, b);
    assert.strictEqual(res, 22);

    done();
};

// Assert that the sum function returns NaN, if one of the parameters is not a number
unit['util.sum should return NaN, if one of the parameters is not a number'] = function (done) {
    // 1st pair
    let a = 4;
    let b = 'hello';
    let res = util.sum(a, b);
    assert.strictEqual(res, NaN);

    // 2nd pair
    a = true;
    b = 0;
    res = util.sum(a, b);
    assert.strictEqual(res, NaN);

    // 3rd pair
    a = -45;
    b = null;
    res = util.sum(a, b);
    assert.strictEqual(res, NaN);

    // 4th pair
    a = { x: '34' };
    b = 25;
    res = util.sum(a, b);
    assert.strictEqual(res, NaN);

    done();
};

// Assert that the quotient function returns valid results for valid parameters
unit['util.quotient should return valid results for valid parameters'] = function (done) {
    // 1st pair
    let a = 36;
    let b = 2;
    let res = util.quotient(a, b);
    assert.strictEqual(res, 18);

    // 2nd pair
    a = 100;
    b = 1;
    res = util.quotient(a, b);
    assert.strictEqual(res, 100);

    // 3rd pair
    a = 12;
    b = 24;
    res = util.quotient(a, b);
    assert.strictEqual(res, 0.5);

    done();
};

// Assert that the quotient function returns NaN, if one of the parameters is not a number
unit['util.quotient should return NaN, if one of the parameters is not a number'] = function (done) {
    // 1st pair
    let a = 4;
    let b = 'hello';
    let res = util.quotient(a, b);
    assert.strictEqual(res, NaN);

    // 2nd pair
    a = true;
    b = 0;
    res = util.quotient(a, b);
    assert.strictEqual(res, NaN);

    // 3rd pair
    a = -45;
    b = null;
    res = util.quotient(a, b);
    assert.strictEqual(res, NaN);

    // 4th pair
    a = { x: '34' };
    b = 25;
    res = util.quotient(a, b);
    assert.strictEqual(res, NaN);

    done();
};

// Assert that the quotient function throws a range error for division by zero
unit['util.quotient should throw a range error for division by zero'] = function (done) {
    let a = 92;
    let b = 0;
    let res;
    assert.throws(() => {
        res = util.quotient(a, b);
    }, RangeError);

    done();
};

// Assert that the square function returns valid results for valid parameters
unit['util.square should return valid results for valid parameters'] = function (done) {
    // 1st example
    let x = 4;
    let res = util.square(x);
    assert.strictEqual(res, 16);

    // 2nd example
    x = 100;
    res = util.square(x);
    assert.strictEqual(res, 10000);

    // 3rd example
    x = -9;
    res = util.square(x);
    assert.strictEqual(res, 81);

    // 4th example
    x = 1;
    res = util.square(x);
    assert.strictEqual(res, 1);

    // 5th example
    x = 0;
    res = util.square(x);
    assert.strictEqual(res, 0);

    done();
};

// Assert that the square function returns NaN if the parameter is not a number
unit['util.square should return NaN if parameter is not a number'] = function (done) {
    // 1st example
    let x = 'hello';
    let res = util.square(x);
    assert.strictEqual(res, NaN);

    // 2nd example
    x = true;
    res = util.square(x);
    assert.strictEqual(res, NaN);

    // 3rd pair
    x = null;
    res = util.square(x);
    assert.strictEqual(res, NaN);

    // 4th pair
    x = { x: '34' };
    res = util.square(x);
    assert.strictEqual(res, NaN);

    done();
};

// Assert that the isPalindrome function returns true for a string that is a palindrome
unit['util.isPalindrome should return true for a string that is a palindrome'] = function (done) {
    // 1st example
    let str = 'monnom';
    let res = util.isPalindrome(str);
    assert.ok(res);

    // 2nd example
    str = 'aaaaaaa';
    res = util.isPalindrome(str);
    assert.ok(res);

    // 3rd example
    str = 'legoTogel';
    res = util.isPalindrome(str);
    assert.ok(res);

    done();
};

// Assert that the isPalindrome function returns false for a string that is not a palindrome
unit['util.isPalindrome should return false for a string that is not a palindrome'] = function (done) {
    // 1st example
    let str = 'abcdefg';
    let res = util.isPalindrome(str);
    assert.ok(res === false);

    // 2nd example
    str = 'MongyTuff';
    res = util.isPalindrome(str);
    assert.ok(res === false);

    // 3rd example
    str = 'flielf';
    res = util.isPalindrome(str);
    assert.ok(res === false);

    done();
};

// Assert that the isPalindrome function returns false if parameter is not a string
unit['util.isPalindrome should return false if parameter is not a string'] = function (done) {
    // 1st example
    let str = true;
    let res = util.isPalindrome(str);
    assert.ok(res === false);

    // 2nd example
    str = undefined;
    res = util.isPalindrome(str);
    assert.ok(res === false);

    // 3rd example
    str = { string: 'belleb' };
    res = util.isPalindrome(str);
    assert.ok(res === false);

    // 4th example
    str = ['aba', 'cddc'];
    res = util.isPalindrome(str);
    assert.ok(res === false);

    done();
};

// Export the module
module.exports = unit;
