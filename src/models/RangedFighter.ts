import { RangedPlayer } from "./RangedPlayer";

export class RangedFighter extends RangedPlayer {
    static readonly BASE_RANGE = 20;
    constructor(){
        super();
        this.maxRange = RangedFighter.BASE_RANGE;
    }
}