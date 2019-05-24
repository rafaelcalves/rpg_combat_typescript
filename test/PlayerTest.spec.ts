import {assert, expect} from "./Basic"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { Player } from "../src/models/Player";

describe('Player', function(){
    describe('A new one...', function(){
        let character: Player = CharacterFactory.create();
        it('should have health equals to 1000', function() {
            expect( character.getHealth() ).to.be.equals(1000);
        });
        it('should have level equals to 1', function() {
            expect( character.getLevel() ).to.be.equals(1);
        });
        it('should be alive', function() {
            expect( character.isAlive() ).to.be.equals(true);
        });
    });
});