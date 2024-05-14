Candy = require('./candy');

const candy = new Candy('Mars', 4.99);

class ShoppingBasket {
    constructor() {
        this.candies = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        discount = this.discount;
    }

    getTotalPrice() {
        let total = 0;
        let map1 = this.candies.map((i) => i.price);
        map1.forEach(price => {total += price});
        return total - this.discount;
    }

    addItem(candy) {
        return this.candies.push(candy);
    }
};

const basket = new ShoppingBasket();

basket.addItem(candy);
module.exports = ShoppingBasket;