export class Character{
    protected health:number;
    protected level:number;
    protected alive:boolean;
    
    constructor(){
        this.health=1000;
        this.level=1;
        this.alive=true;
    }
    
    public get getHealth() : number {
        return this.health;
    }
    
    public get getLevel() : number {
        return this.level; 
    }
    
    public get isAlive() : boolean {
        return this.alive;
    }
}