import { Ingredient } from "./Ingredient";
import { Recipe } from "./Recipe";

export class RecipeIngredient {
    ring_id: number;
    ingredient_id: number;
    recipe_id: number;
    amount: number;

    constructor(ring_id: number, ingredient: number, recipe: number, amount: number) {
        this.ring_id = ring_id;
        this.ingredient_id = ingredient;
        this.recipe_id = recipe;
        this.amount = amount;
    }
}