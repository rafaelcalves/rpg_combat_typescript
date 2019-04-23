import { CharacterFactory } from "../factories/CharacterFactory"
import { HealingError } from "../errors/HealingError"
import { DamageHandler } from "../handlers/DamageHandler"
import { Damage } from "./Damage";

export class Character {

    protected _health:number;
    protected _level:number;
    protected _alive:boolean;

    constructor(health: number, level: number, alive: boolean){
        this._health=health
        this._level=level;
        this._alive=alive;
    }

    public heal(hit:number): void{
        if(this.isAlive()){
            let resultHealth = this.health + hit;
            if(resultHealth > CharacterFactory.FULL_HEALTH){
                this._health = CharacterFactory.FULL_HEALTH;
            } else{
                this._health = resultHealth;
            }
        } else {
            throw new HealingError("A dead character cannot be healed");
        }
    }

    public damage(target:Character, hit:number ):void{
        let damage: Damage = new Damage(this, target, hit);
        DamageHandler.handle(damage)
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

    public get health() : number {
        return this._health;
    }
    
    public get level() : number {
        return this._level; 
    }
    
    protected set alive(alive : boolean) {
        this._alive = alive;
    }
}