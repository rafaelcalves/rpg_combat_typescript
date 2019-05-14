import {Character} from "../models/Character"
import {MeleeFigther} from '../models/MeleeFighter';
import {RangedFigther} from '../models/RangedFigther';

export class CharacterFactory {

    public static create() : Character{
        return new Character();
    }

    public static createSetLevel(level: number) : Character{
        let char: Character = new Character();
        char.levelUp(level)
        return char;
    }

    public static createMelee(){
        return new MeleeFigther();
    }

    public static createRanged(){
        return new RangedFigther();
    }
}