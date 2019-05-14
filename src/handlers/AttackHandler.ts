import { Character } from "../models/Character";
import { Combat } from "../models/Combat";
import { DamagingError } from "../errors/DamagingError";
import { RangedCombat } from "../models/RangedCombat";
import { RangeError } from "../errors/RangeError";

export class AttackHandler {
    static readonly LEVEL_DIFF_FOR_HIT: number = 5;
    static readonly HIT_INCREASING: number = 1.5;
    static readonly HIT_DECREASING: number = .5;

    public static handle(combat: Combat){
        if(combat instanceof RangedCombat){
            if(combat.range > combat.attacker.maxRange){
                throw new RangeError("Target out of range");
            }
        }
        if (combat.attacker != combat.target) {
            let hit: number = this.getHit(combat);
            combat.target.beDamaged(hit);
        } else {
            throw new DamagingError("Cannot heart itself");
        }
    }
    public static getHit(combat: Combat): number{
        if(this.shouldIncreaseHit(combat)){
            return combat.hit*AttackHandler.HIT_INCREASING;
        }
        if(this.shouldDecreaseHit(combat)){
            return combat.hit*AttackHandler.HIT_DECREASING;
        }
        return combat.hit;
    }

    protected static shouldIncreaseHit(combat: Combat): boolean{
        let levelDifference = combat.attacker.level - combat.target.level;
        return levelDifference >= AttackHandler.LEVEL_DIFF_FOR_HIT;
    }

    protected static shouldDecreaseHit(combat: Combat): boolean{
        let levelDifference = combat.target.level - combat.attacker.level
        return levelDifference >= AttackHandler.LEVEL_DIFF_FOR_HIT;
    }
}