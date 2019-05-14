import {Combat} from "./Combat";
import {Character} from "./Character"
export class RangedCombat extends Combat {
    protected _range:number;
    constructor(attacker: Character, target: Character, hit: number, range: number){
        super(attacker,target,hit);
        this._range = range;
    }

    public get range() : number {
        return this._range;
    }
}