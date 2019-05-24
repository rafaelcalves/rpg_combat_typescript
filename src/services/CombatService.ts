import { Action } from "../models/Action";
import { DamagingError } from "../errors/DamagingError";
import { RangedAction } from "../models/RangedAction";
import { RangeError } from "../errors/RangeError";
import { FactionService } from "../services/FactionService";
import { RangedPlayer } from "../models/RangedPlayer"
import { Player } from "../models/Player";

export const enum HitChanging {
    INCREASING = 1.5,
    DECREASING = .5
}

export const LEVEL_DIFF_FOR_HIT: number = 5;

export namespace CombatService {
    export function handle(combat: Action){
        checkFactions(combat);
        checkRange(combat);
        checkSelfViolence(combat);

        let hit: number = getHit(combat);
        combat.getTarget().beDamaged(hit);
    }

    function checkFactions(combat: Action){
        if(combat.getTarget() instanceof Player){
            const target: Player = (combat.getTarget() as Player)
            if(FactionService.areAllies(combat.getMain(), target)){
                throw new DamagingError("Cannot hurt an ally");
            }
        }
    }

    function checkRange(combat: Action){
        if(combat instanceof RangedAction){
            const rangedCharacter: RangedPlayer = combat.getMain() as RangedPlayer;
            if(combat.getRange() > rangedCharacter.getMaxRange()){
                throw new RangeError("Target out of range");
            }
        }
    }

    function checkSelfViolence(combat: Action){
        if(combat.getMain() === combat.getTarget()){
            throw new DamagingError("Cannot hurt itself");
        }
    }

    export function getHit(combat: Action): number{
        if(combat.getTarget() instanceof Player) {
            if(shouldIncreaseHit(combat)){
                return combat.getHit()*HitChanging.INCREASING;
            }
            if(shouldDecreaseHit(combat)){
                return combat.getHit()*HitChanging.DECREASING;
            }
        }
        return combat.getHit();
    }

    function shouldIncreaseHit(combat: Action): boolean{
        const target: Player = (combat.getTarget() as Player)
        const levelDifference = combat.getMain().getLevel() - target.getLevel();
        return levelDifference >= LEVEL_DIFF_FOR_HIT;
    }

    function shouldDecreaseHit(combat: Action): boolean{
        const target: Player = (combat.getTarget() as Player)
        const levelDifference = target.getLevel() - combat.getMain().getLevel()
        return levelDifference >= LEVEL_DIFF_FOR_HIT;
    }
}