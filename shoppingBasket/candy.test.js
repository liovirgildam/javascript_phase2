const Candy = require('./candy');

describe('candy', ()=> {
    it('adds Mars as candy', () => {
        const marsCandy = new Candy('Mars', 4.99);
        result = marsCandy.getName();
        expect(result).toEqual('Mars');
    });
    it('gets the price of Mars candy', () => {
        const marsCandy = new Candy('Mars', 4.99);
        result = marsCandy.getPrice();
        expect(result).toEqual(4.99);
    });
});