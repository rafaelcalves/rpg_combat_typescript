export class Character{
    readonly FULL_HEALTH = 1000;

    protected _health:number;
    protected _level:number;
    protected _alive:boolean;

    constructor(){
        this._health=this.FULL_HEALTH;
        this._level= 1;
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
    
    public heal(healingPoints:number):void;
    public heal(healingPoints:number, target: Character):void;

    public heal(healingPoints:number, target?: Character):void{
        if (target != null) {
            target.heal(healingPoints);
        } else {
            this.beHealed(healingPoints);
        }
    }

    protected beHealed(healingPoints:number){
        if(this.isAlive()){
            let resultHealth = this._health + healingPoints;
            if(resultHealth > this.FULL_HEALTH){
                this._health = this.FULL_HEALTH;
            } else{
                this._health = resultHealth;
            }
        } else {
            throw new Error("Cannot heal a dead character");
        }
    }

    public damage(hit:number):void;
    public damage(hit:number, target: Character):void;

    public damage(hit:number, target?: Character):void{
        if (target != null) {
            target.damage(hit);
        } else {
            this.beDamaged(hit)
        }
    }

    protected beDamaged(hit:number){
        if(this._health > hit){
            this._health = this._health - hit;
        } else {
            this.kill();
        }
    }
}