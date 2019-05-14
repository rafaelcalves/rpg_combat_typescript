import {Character} from './Character'
export class RangedFigther extends Character {
    static readonly BASE_RANGE = 20;

    constructor(){
        super();
        this._maxRange = RangedFigther.BASE_RANGE;
    }
} 