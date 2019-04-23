import { Character } from "./Character";

export class Damage{
    protected _attacker: Character;
    protected _target: Character;
    protected _hit: number;

    constructor(attacker: Character, target: Character, hit: number){
        this._attacker = attacker;
        this._target = target;
        this._hit = hit;
    }
    
    public get attacker() : Character {
        return this._attacker;
    }
    
    public get target() : Character {
        return this._target;
    }
    
    public get hit() : number {
        return this._hit;
    }
}