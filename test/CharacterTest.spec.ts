import {assert, expect} from "./Basic"
import char = require('../src/Character')

describe('Character', function(){
    describe('a new one', function(){
        let character = new char.Character;
        it('should have health equals to 1000', function() {
            expect( character.health ).to.be.equals(1000);
        });
    });
});