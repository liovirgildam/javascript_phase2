const add = require('./add');

describe('add', ()=> {
    it('adds 2 and 2', () => {
        result = add(2,2);
        expect(result).toBe(4);
    });
    it('adds 0 and 5', () => {
        result = add(0,5);
        expect(result).toEqual(5);
    });
});

