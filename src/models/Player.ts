import { Character } from "./Character";
import { Faction } from "./Faction";
import { Action } from "./Action";
import { HealingService } from "../services/HealingService";
import { CombatService } from "../services/CombatService";
import { FactionService } from "../services/FactionService";

export class Player extends Character{
    static readonly FULL_HEALTH = 1000;
    static readonly START_LEVEL = 1;

    constructor(
        protected level: number = 1,
        protected factions: Array<Faction> = []
    ){
        super(Player.FULL_HEALTH);
    }

    public selfHeal(hit:number):void{
        let action: Action = new Action(this, this, hit);
        HealingService.heal(action);
    }

    public heal(target:Player, hit:number){
        let action: Action = new Action(this, target, hit);
        HealingService.heal(action);
    }

    public beHealed(hit:number):void{
        let resultHealth = this.health + hit;
        if (resultHealth > Player.FULL_HEALTH) {
            this.health = Player.FULL_HEALTH;
        } else {
            this.health = resultHealth;
        }
    }

    public attack(target:Player, hit:number):void{
        let attack: Action = new Action(this, target, hit);
        CombatService.handle(attack)
    }

    public levelUp(levels:number):void;
    public levelUp(levels?:number):void {
        if(levels!=null){
            this.level = this.level + levels;
        }
    }

    public joinFaction(factionToJoin: Faction){
       FactionService.addFaction(this.factions, factionToJoin)
    }

    public leaveFaction(factionToRemove: Faction){
        this.factions = FactionService.filterNotEqualsTo(this.factions, factionToRemove)
    }

    public getFactions() : Array<Faction> {
        return this.factions; 
    }    
    
    public getLevel() : number {
        return this.level; 
    }
}