import {assert, expect} from "./Basic"
import { Player } from "../src/models/Player"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { FactionFactory } from "../src/factories/FactionFactory";
import { HealingError } from "../src/errors/HealingError";
import { Faction } from "../src/models/Faction";

describe('Healing Tests', function(){
    describe('A character...', function(){
        const character: Player = CharacterFactory.create();
        it('should be able to heal itself', function() {
            character.selfHeal(100);
        });
        it('target should not be healed more than full health', function() {
            expect(character.getHealth()).to.be.equals(1000);
        });
        it('should not be able to heal a dead character', function() {
            character.kill();
            expect(() => character.selfHeal(100)).to.throw(HealingError);
        });
        it('the target should have be healed as given', function() {
            character.reborn();
            character.selfHeal(100);
            expect(character.getHealth()).to.be.equals(100);
        });
        const enemy: Player = CharacterFactory.create();
        it('should not be able to heal an enemy', function(){
            expect(() => character.heal(enemy,100)).to.throw(HealingError);
        });
        const faction:Faction = FactionFactory.create("faction");
        it('should be able to heal an ally', function(){
            enemy.joinFaction(faction);
            character.joinFaction(faction);
            const ally = enemy;
            ally.beDamaged(100);
            character.heal(ally,50);
            expect(ally.getHealth()).to.be.equals(950);
        });
    });
});