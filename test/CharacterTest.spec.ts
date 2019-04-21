import {assert, expect} from "./Basic"
import char = require('../src/Character')

describe('Character', function(){
    describe('a new one', function(){
        let character = new char.Character;
        it('should have health equals to 1000', function() {
            expect( character.getHealth ).to.be.equals(1000);
        });
        it('should have level equals to 1', function() {
            expect( character.getLevel ).to.be.equals(1);
        });
        it('should be alive', function() {
            expect( character.isAlive ).to.be.equals(true);
        });
    });
});