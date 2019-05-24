import { Character } from "./Character";
import { Player } from "./Player";

export class Action{
    
    constructor(
        protected main: Player,
        protected target: Character,
        protected hit: number
    ){}
    
    public getMain() : Player {
        return this.main;
    }
    
    public getTarget() : Character {
        return this.target;
    }
    
    public getHit() : number {
        return this.hit;
    }
}