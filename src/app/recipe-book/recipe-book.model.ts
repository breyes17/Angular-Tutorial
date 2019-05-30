export class RecipeBook{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

// short cut way above
// export class RecipeBook{
//     constructor(public name: string, public description: string, public imagePath: string){}
// }