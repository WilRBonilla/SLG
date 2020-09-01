import { Ingredient } from "./Ingredient";
import { Recipe } from "./Recipe";

export class RecipeIngredient {
    ring_id: number;
    ingredient: Ingredient;
    recipe: Recipe;
    amount: number;

    constructor(ring_id: number, ingredient: Ingredient, recipe: Recipe, amount: number) {
        this.ring_id = ring_id;
        this.ingredient = ingredient;
        this. recipe = recipe;
        this.amount = amount;
    }
}