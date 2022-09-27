const multiply = require('./multiply');

describe('multiply', ()=> {
    it('multiply 2 per 4', () =>{
        result = multiply(2,4)
        expect(result).toBe(8);
    });
    it('multiply 0 per 2', () => {
        result = multiply(0,2);
        expect(result).toBe(0);
    });
});