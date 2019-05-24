import {Player} from "./Player"
import {RangedAction} from "./RangedAction";
import {CombatService} from "../services/CombatService";

export class RangedPlayer extends Player {
    constructor(protected maxRange:number = 0){
        super();
    }

    public rangedAttack(target:RangedPlayer, hit:number, range:number){
        let attack: RangedAction = new RangedAction(this, target, hit, range);
        CombatService.handle(attack)
    }

    public getMaxRange() : number {
        return this.maxRange;
    }
}