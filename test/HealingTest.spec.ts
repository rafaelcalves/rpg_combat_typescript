import {assert, expect} from "./Basic"
import { Character } from "../src/models/Character"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { HealingError } from "../src/errors/HealingError";

describe('Healing Tests', function(){
    describe('A character...', function(){
        let character: Character = CharacterFactory.create();
        it('should be able to heal itself', function() {
            character.heal(100);
        });
        it('target should not be healed more than full health', function() {
            expect(character.health).to.be.equals(1000);
        });
        it('should not be able to heal a dead character', function() {
            character.kill();
            expect(() => character.heal(100)).to.throw(HealingError);
        });
        it('the target should have be healed as given', function() {
            character.reborn();
            character.heal(100);
            expect(character.health).to.be.equals(100);
        });
    });
});