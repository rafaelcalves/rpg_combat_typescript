import {Character} from './Character'
export class MeleeFigther extends Character{
    static readonly BASE_RANGE = 2;

    constructor(){
        super();
        this._maxRange = MeleeFigther.BASE_RANGE;
    }
}