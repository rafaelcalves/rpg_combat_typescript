import {Character} from "../models/Character"

export class CharacterFactory {
    static readonly FULL_HEALTH = 1000;
    static readonly START_LEVEL = 1;

    public static create() : Character{
        return new Character(CharacterFactory.FULL_HEALTH, CharacterFactory.START_LEVEL, true);
    }

    public static createSetLevel(level: number) : Character{
        return new Character(CharacterFactory.FULL_HEALTH, level, true);
    }
}