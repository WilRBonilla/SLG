import { Shopper } from "./Shopper";
import { Ingredient } from "./Ingredient";

export class Pantry {
    p_id: number;
    shopper: Shopper;
    ingredient: Ingredient;
    amount: number;

    constructor(p_id: number, shopper: Shopper, ingredient: Ingredient, amount: number) {
        this.p_id = p_id;
        this.shopper = shopper;
        this.ingredient = ingredient;
        this.amount = amount;
    }
}