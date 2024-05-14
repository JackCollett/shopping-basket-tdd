const ShoppingBasket = require('./basket');
const Candy = require('./candy');


const candy = new Candy('Mars', 4.99);


describe('ShoppingBasket Unit tests', () => {
    it('when addItem is called, the argument passed to the function is added to the candies array', () => {
        const basket = new ShoppingBasket();

        const doubleCandy = {
            name: 'Mars',
            price: 4.99, 
            getName: () => { return doubleCandy.name },
            getPrice: () => { return doubleCandy.price },
        };
        basket.addItem(doubleCandy);
        expect(basket.candies).toEqual([doubleCandy]);
        expect(basket.getTotalPrice()).toBe(4.99);
        expect(basket.candies[0].getName()).toEqual('Mars');
        expect(basket.candies[0].getPrice()).toEqual(4.99);

    });
    it("", () => {
        const basket = new ShoppingBasket();
        basket.addItem(candy);
        basket.addItem(new Candy('Skittle', 3.99));
        basket.addItem(new Candy('Skittle', 3.99));
        expect(basket.getTotalPrice()).toBe(12.97);
    })
});
