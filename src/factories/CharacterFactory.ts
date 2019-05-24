import {Player} from "../models/Player"
import {MeleeFighter} from '../models/MeleeFighter';
import {RangedFighter} from '../models/RangedFighter';
import { Character } from "../models/Character";

export namespace CharacterFactory {

    export function create() : Player{
        return new Player();
    }

    export function createSetLevel(level: number) : Player{
        let char: Player = new Player();
        char.levelUp(level)
        return char;
    }

    export function createMelee(){
        return new MeleeFighter();
    }

    export function createRanged(){
        return new RangedFighter();
    }

    export function createThing(health:number){
        return new Character(health);
    }
}