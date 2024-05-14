const Candy = require('./candy');



describe('Unit tests for the Candy Class', () => {
    it('getName return candy name', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.name).toEqual('Mars');
        expect(candy.price).toEqual(4.99);
        expect(candy).toEqual({'name': 'Mars', 'price': 4.99});
    })
});