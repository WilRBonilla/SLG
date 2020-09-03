import { Shopper } from "./Shopper";
import { Ingredient } from "./Ingredient";

export class Pantry {
    p_id: number;
    shopper: Shopper;
    ingredient: Ingredient;
    amount: number;

    constructor(shopper: Shopper, ingredient: Ingredient, amount: number) {
        this.shopper = shopper;
        this.ingredient = ingredient;
        this.amount = amount;
    }
}