import {assert, expect} from "./Basic"
import { Character } from "../src/models/Character"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { DamagingError } from "../src/errors/DamagingError";

describe('Combat Tests', function(){
    describe('A character...', function(){
        let character: Character = CharacterFactory.create();
        let target: Character = CharacterFactory.create();
        it('should be able to hit a target character', function(){
            character.attack(target,100);
        });

        it('the target should have lost health as the given damage', function(){
            expect(target.health).to.be.equals(900);
        });

        it('if damage is bigger than or equals to target\'s health, target should die', function(){
            character.attack(target, 1000);
            expect(target.isAlive()).to.be.equals(false);
        });

        it('should not be able to heart itself', function(){
            expect(() => character.attack(character, 100)).to.throw(DamagingError);
        });

        let strongerChar: Character = CharacterFactory.createSetLevel(6);
        it('should have hit decreased in 50% when target is 5 or more levels stronger', function(){
            character.attack(strongerChar, 100);
            expect(strongerChar.health).to.be.equals(950);
        });

        it('should have hit increased in 50% when attacker is 5 or more levels stronger', function(){
            strongerChar.attack(character, 100);
            expect(character.health).to.be.equals(850);
        });
    });
});