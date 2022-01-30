const largestF = require('../src/largestK');

describe('count', () => {
    test('the first test', () => {
        expect(largestF (64)).toBe(3);
    })
    test('the second test', () => {
        expect(largestF(62)).toEqual(2);
    })
})