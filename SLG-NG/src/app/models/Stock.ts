import { Ingredient } from "./Ingredient";

export class Stock {
    s_id: number;
    ingredient: Ingredient;
    amount: number;
    price: number;

    constructor(s_id: number, ingredient: Ingredient, amount: number, price: number) {
        this.s_id = s_id;
        this.ingredient = ingredient;
        this.amount = amount;
        this.price = price;
    }
}