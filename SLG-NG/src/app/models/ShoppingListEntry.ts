import { Ingredient } from "./Ingredient";
import { Shopper } from "./Shopper";
import { Note } from "./Note";

export class ShoppingListEntry {
    entry_id: number;
    ingredient: Ingredient;
    shopper: Shopper;
    amount: number;


    constructor(entry_id: number, ingredient: Ingredient, shopper: Shopper, amount: number) {
        this.entry_id = entry_id;
        this.ingredient = ingredient;
        this.shopper = shopper;
        this.amount = amount;
    }
}