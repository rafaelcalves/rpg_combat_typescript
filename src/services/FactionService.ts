import {Faction} from "../models/Faction";
import { Player } from "../models/Player";

export namespace FactionService{

    export function addFaction(factions: Faction[], factionToAdd: Faction):void{
        factions.push(factionToAdd);
    }

    export function filterNotEqualsTo(factions: Faction[], factionTofilter: Faction): Faction[]{
        return factions.filter(faction => faction.getName() !== factionTofilter.getName())
    }

    export function getFactionByName(factions: Faction[], name: string){
        return factions.filter(faction => faction.getName() === name);
    }

    export function areAllies(char:Player, charToCompare:Player){
        const commonFactions: Faction[] = factionsIntersect(char.getFactions(), charToCompare.getFactions());
        return char===charToCompare || commonFactions.length > 0;
    }

    function factionsIntersect(factions: Faction[], factionsToCompare: Faction[]) {
        var aux;
        if (factionsToCompare.length > factions.length){
            aux = factionsToCompare; 
            factionsToCompare = factions;
            factions = aux;
        }
        return factions.filter(function (e) {
            return factionsToCompare.indexOf(e) > -1;
        });
    }
}