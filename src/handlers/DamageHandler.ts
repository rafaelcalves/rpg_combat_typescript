import { Character } from "../models/Character"
import { Damage } from "../models/Damage";
import { DamagingError } from "../errors/DamagingError"

export class DamageHandler {
    static readonly LEVEL_DIFF_FOR_HIT: number = 5;
    static readonly HIT_INCREASING: number = 1.5;
    static readonly HIT_DECREASING: number = .5;

    public static handle(damage: Damage){
        if (damage.attacker != damage.target) {
            let hit: number = this.getHit(damage);
            damage.target.beDamaged(hit);
        } else {
            throw new DamagingError("Cannot heart itself");
        }
    }
    public static getHit(damage: Damage): number{
        if(this.shouldIncreaseHit(damage)){
            return damage.hit*DamageHandler.HIT_INCREASING;
        }
        if(this.shouldDecreaseHit(damage)){
            return damage.hit*DamageHandler.HIT_DECREASING;
        }
        return damage.hit;
    }

    protected static shouldIncreaseHit(damage: Damage): boolean{
        let levelDifference = damage.attacker.level - damage.target.level;
        return levelDifference >= DamageHandler.LEVEL_DIFF_FOR_HIT;
    }

    protected static shouldDecreaseHit(damage: Damage): boolean{
        let levelDifference = damage.target.level - damage.attacker.level
        return levelDifference >= DamageHandler.LEVEL_DIFF_FOR_HIT;
    }
}