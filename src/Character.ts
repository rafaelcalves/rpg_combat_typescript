export class Character{
    protected _health:number;
    protected _level:number;
    protected _alive:boolean;
    
    constructor(){
        this._health=1000;
        this._level=1;
        this._alive=true;
    }
    
    public get health() : number {
        return this._health;
    }
    
    public get level() : number {
        return this._level; 
    }
    
    public get isAlive() : boolean {
        return this._alive;
    }

    public set health(health : number) {
        this._health = health;
    }
    
    public set level(level : number) {
        this._level = level;
    }

    public kill() {
        this._alive = false;
    }    

    public reborn() {
        this._alive = true;
    }

    public heal(target:Character, value:number) {
        target.health = target.health + value;
    }

    public damage(target:Character, value:number) {
        target.health = target.health - value;
    }
}