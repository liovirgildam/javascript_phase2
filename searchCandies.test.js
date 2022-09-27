const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
 it('returns a filter array', () => {
    const result = searchCandies('Mars', 10);
    expect(result[0]).toEqual('Mars'); 
 });
 it('returns an array filtered by max price', () => {
    const result = searchCandies('Ma', 10);
    expect(result[0]).toEqual('Mars');
    expect(result[1]).toEqual('Maltesers');
 });
 it('returns an array filtered by max price', () => {
    const result = searchCandies('Ma', 2);
    expect(result[0]).toEqual('Mars');
    expect(result.length).toEqual(1);
 });
 it('returns an array filtered by max price', () => {
    const result = searchCandies('S', 10);
    expect(result[0]).toEqual('Skitties');
    expect(result[1]).toEqual('Skittles');
    expect(result[2]).toEqual('Starburst');
 });
 it('returns an array filtered by max price', () => {
    const result = searchCandies('S', 4);
    expect(result[0]).toEqual('Skitties');
    expect(result[1]).toEqual('Skittles');
    expect(result.length).toEqual(2);
 });
 it('returns an array filtered by max price', () => {
    const result = searchCandies('Ma', 10);
    expect(result[0]).toEqual('Mars');
    expect(result[1]).toEqual('Maltesers');
 });

});