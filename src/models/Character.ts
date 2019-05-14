import { HealingError } from "../errors/HealingError";
import { AttackHandler } from "../handlers/AttackHandler";
import { Combat } from "./Combat";
import { RangedCombat } from "./RangedCombat";

export class Character {
    static readonly FULL_HEALTH = 1000;
    static readonly START_LEVEL = 1;

    protected _health:number = 1000;
    protected _level:number = 1;
    protected _alive:boolean = true;
    protected _maxRange:number = 0;

    public heal(hit:number): void{
        if(this.isAlive()){
            let resultHealth = this.health + hit;
            if(resultHealth > Character.FULL_HEALTH){
                this._health = Character.FULL_HEALTH;
            } else{
                this._health = resultHealth;
            }
        } else {
            throw new HealingError("A dead character cannot be healed");
        }
    }

    public attack(target:Character, hit:number):void{
        let attack: Combat = new Combat(this, target, hit);
        AttackHandler.handle(attack)
    }

    public rangedAttack(target:Character, hit:number, range:number){
        let attack: RangedCombat = new RangedCombat(this, target, hit, range);
        AttackHandler.handle(attack)
    }

    public beDamaged(hit:number): void {
        if(this.health > hit){
            this._health = this.health - hit;
        } else {
            this.kill();
        }
    }
    
    public isAlive(): boolean{
        return this._alive;
    };

    public kill():void {
        if(this.health > 0){
            this._health = 0;
        }
        this.alive = false;
    }    

    public reborn():void {
        this.alive = true;
    }

    public levelUp(levels:number):void;
    public levelUp(levels?:number):void {
        if(levels!=null){
            this._level = this.level + levels;
        }
        
    }

    public get health() : number {
        return this._health;
    }
    
    public get level() : number {
        return this._level; 
    }
    
    protected set alive(alive : boolean) {
        this._alive = alive;
    }

    public get maxRange() : number {
        return this._maxRange;
    }
    
}