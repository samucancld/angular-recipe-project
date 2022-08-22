export class Recipe {
    public title: string;
    public description: string;
    public time_minutes: number;
    public price: number;
    public image: string;
    // public user : User;
    // public tags: Tag[];
    // public ingredinets: Ingredient[];

    constructor(
        title: string,
        description: string,
        time_minutes: number,
        price: number,
        image: string,
        // user: User,
        // tags: Tag[],
        // ingredinets: Ingredient[],
    ){
        this.title = title;
        this.description = description;
        this.time_minutes = time_minutes;
        this.price = price;
        this.image = image;
        // this.user = user;
        // this.tags = tags;
        // this.ingredinets = ingredinets;
    }

};