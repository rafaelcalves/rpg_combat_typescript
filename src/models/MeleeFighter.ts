import { RangedPlayer } from "./RangedPlayer";

export class MeleeFighter extends RangedPlayer {
    static readonly BASE_RANGE = 2;
    constructor(){
        super();
        this.maxRange = MeleeFighter.BASE_RANGE;
    }
}