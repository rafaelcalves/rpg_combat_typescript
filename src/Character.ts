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
    
    public isAlive() : boolean {
        return this._alive;
    }
    
    public set level(level : number) {
        this._level = level;
    }

    public kill():void {
        if(this._health > 0){
            this._health = 0;
        }

        this._alive = false;
    }    

    public reborn():void {
        this._alive = true;
    }
    
    public heal(value:number):void;
    public heal(value:number, target: Character):void;

    public heal(value:number, target?: Character):void{
        if (target != null) {
            target.heal(value);
        } else {
            this._health = this._health + value;
        }
    }

    public damage(hit:number):void;
    public damage(hit:number, target: Character):void;

    public damage(hit:number, target?: Character):void{
        if (target != null) {
            target.damage(hit);
        } else {
            this.sufferDamage(hit)
        }
    }

    protected sufferDamage(hit:number){
        if(this._health > hit){
            this._health = this._health - hit;
        } else {
            this.kill();
        }
    }
}