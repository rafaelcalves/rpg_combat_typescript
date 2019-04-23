import {assert, expect} from "./Basic"
import char = require('../src/Character')

describe('Character', function(){
    describe('a new one', function(){
        let character = new char.Character;
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
        let character = new char.Character;
        let target = new char.Character;
        it('should be able to hit a target character', function(){
            character.damage(100, target);
        });
        it('the target should have lost health as the given damage', function(){
            expect(target.health).to.be.equals(900);
        });

        it('if damage is bigger than or equals to target\'s health, target should die', function(){
            character.damage(1000, target);
            expect(target.isAlive()).to.be.equals(false);
        });
    });

    describe('healing', function(){
        let character = new char.Character;
        let target = new char.Character;
        it('should be able to heal a target character', function() {
            character.heal(100, target);
        });
        it('target should not be healed more than full health', function() {
            expect(target.health).to.be.equals(1000);
        });
        it('should not be able to heal a dead character', function() {
            target.kill();
            expect(() => character.heal(100, target)).to.throw(Error, "Cannot heal a dead character");
        });
        it('the target should have be healed as given', function() {
            target.reborn();
            character.heal(100, target);
            expect(target.health).to.be.equals(100);
        });
    });
});