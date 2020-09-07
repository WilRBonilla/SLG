export class Recipe {
    r_id: number;
    title: string;
    cuisine: string;
    tag1: string;
    tag2: string;

    constructor(r_id: number, title: string, cuisine: string, tag1: string, tag2: string) {
        this.r_id = r_id;
        this.title = title;
        this.cuisine = cuisine;
        this.tag1 = tag1;
        this.tag2 = tag2;
    }
}