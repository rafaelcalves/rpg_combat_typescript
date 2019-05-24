import { Action } from "./Action";
import { RangedPlayer } from "./RangedPlayer";

export class RangedAction extends Action {
    protected range:number;
    constructor(attacker: RangedPlayer, target: RangedPlayer, hit: number, range: number){
        super(attacker,target,hit);
        this.range = range;
    }

    public getRange() : number {
        return this.range;
    }
}