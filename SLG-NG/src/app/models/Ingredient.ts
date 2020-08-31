export class Ingredient {
    ing_id: number;
    name: string;
    units: string;

    constructor(ing_id: number, name: string, units: string) {
        this.ing_id = ing_id;
        this.name = name;
        this.units = units;
    }
}