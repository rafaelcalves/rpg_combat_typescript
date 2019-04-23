import {assert, expect} from "./Basic"
import { Character } from "../src/models/Character"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { HealingError } from "../src/errors/HealingError";
import { DamagingError } from "../src/errors/DamagingError";

describe('Character', function(){
    describe('a new one', function(){
        let character: Character = CharacterFactory.create();
        it('should have health equals to 1000', function() {
            expect( character.health ).to.be.equals(1000);
        });
        it('should have level equals to 1', function() {
            expect( character.level ).to.be.equals(1);
        });
        it('should be alive', function() {
            expect( character.isAlive() ).to.be.equals(true);
        });
    });

    describe('fighting', function(){
        let character: Character = CharacterFactory.create();
        let target: Character = CharacterFactory.create();
        it('should be able to hit a target character', function(){
            character.damage(target,100);
        });

        it('the target should have lost health as the given damage', function(){
            expect(target.health).to.be.equals(900);
        });

        it('if damage is bigger than or equals to target\'s health, target should die', function(){
            character.damage(target, 1000);
            expect(target.isAlive()).to.be.equals(false);
        });

        it('should not be able to heart itself', function(){
            expect(() => character.damage(character, 100)).to.throw(DamagingError, "Cannot heart itself");
        });

        let strongerChar: Character = CharacterFactory.createSetLevel(6);
        it('should have hit decreased in 50% when target is 5 or more levels stronger', function(){
            character.damage(strongerChar, 100);
            expect(strongerChar.health).to.be.equals(950);
        });

        it('should have hit increased in 50% when attacker is 5 or more levels stronger', function(){
            strongerChar.damage(character, 100);
            expect(character.health).to.be.equals(850);
        });
    });

    describe('healing', function(){
        let character: Character = CharacterFactory.create();
        it('should be able to heal itself', function() {
            character.heal(100);
        });
        it('target should not be healed more than full health', function() {
            expect(character.health).to.be.equals(1000);
        });
        it('should not be able to heal a dead character', function() {
            character.kill();
            expect(() => character.heal(100)).to.throw(HealingError, "A dead character cannot be healed");
        });
        it('the target should have be healed as given', function() {
            character.reborn();
            character.heal(100);
            expect(character.health).to.be.equals(100);
        });
    });
});