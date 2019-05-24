import { HealingError } from "../errors/HealingError";
import { Character } from "../models/Character"
import { Action } from "../models/Action"
import { FactionService } from "../services/FactionService"
import { Player } from "../models/Player";

export namespace HealingService{
    export function heal(action: Action):void{
        if(action.getTarget() instanceof Player){
            const target: Player = (action.getTarget() as Player)
            checkAlive(action.getTarget());
            checkAllies(action.getMain(), target);
            target.beHealed(action.getHit())
        } else {
            throw new HealingError("A non Player cannot be healed");
        }
    }

    function checkAlive(char: Character){
        if (!char.isAlive()) {
            throw new HealingError("A dead character cannot be healed");
        }
    }

    function checkAllies(char:Player, target: Player){
        const areNotAllies = !FactionService.areAllies(char, target);
        if(areNotAllies){
            throw new HealingError("Cannot heal an enemy");
        }
    }
}