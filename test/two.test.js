const twoS = require('../src/twoSquared');

describe('count', () => {
    test('the first test', () => {
        expect(twoS (58)).toEqual('x=3 and y=7');
    })
    test('the second test', () => {
        expect(twoS(61)).toEqual('x=5 and y=6');
    })
})