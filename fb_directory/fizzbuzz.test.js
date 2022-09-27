const fizzbuzz = require('./fizzbuzz');
describe('fizzbuzz', () =>{
    it('returns Fizz when passed 3', () =>{
        result = fizzbuzz(3);
        expect(result).toBe('Fizz');
    });
    it('returns Buzz when passed 5', () =>{
        result = fizzbuzz(5);
        expect(result).toBe('Buzz');
    });
    it('returns 8 when passed 8', () =>{
        result = fizzbuzz(8);
        expect(result).toBe(8);
    });
    it('returns FizzBuzz when passed 15', () =>{
        result = fizzbuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    it('returns FizzBuzz when passed 18', () =>{
        result = fizzbuzz(18);
        expect(result).toBe('Fizz');
    });
    it('returns FizzBuzz when passed 20', () =>{
        result = fizzbuzz(20);
        expect(result).toBe('Buzz');
    });
});