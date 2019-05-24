export class Faction {
    constructor(protected name:string){
        this.name = name;
    }
    
    public getName(): string {
        return this.name;
    }
}