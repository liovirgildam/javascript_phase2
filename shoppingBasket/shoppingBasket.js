class ShoppingBasket{
    constructor(){
        this.basket = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        this.discount = discount;
      }
    

    getTotalPrice(){
        let total = 0;
        this.basket.forEach(candy => total += candy.getPrice());
        return total - this.discount;
    }

    addItem(candy){
        this.basket.push(candy);
    }

}

module.exports = ShoppingBasket;