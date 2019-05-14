import {assert, expect} from "./Basic"
import { Character } from "../src/models/Character"
import { CharacterFactory } from "../src/factories/CharacterFactory";

describe('Character', function(){
    describe('A new one...', function(){
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
});