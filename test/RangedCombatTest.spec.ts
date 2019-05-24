import {assert, expect} from "./Basic";
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { RangedPlayer } from "../src/models/RangedPlayer";
import { MeleeFighter } from "../src/models/MeleeFighter";
import { RangedFighter } from "../src/models/RangedFighter";
import { RangeError} from "../src/errors/RangeError";

describe('Ranged Combat', function(){
    const melee: MeleeFighter = CharacterFactory.createMelee();
    const ranged: RangedFighter = CharacterFactory.createRanged();
    let target: RangedPlayer;
    describe('Melee figthers...', function(){
        target = ranged;
        describe('should not be able to hit someone farther than 2', function(){
            expect(() => melee.rangedAttack(target,50, 3)).to.throw(RangeError);
        });
        describe('should be able to hit someone closer than 2', function(){
            melee.rangedAttack(target,50, 1);
            expect(target.getHealth()).to.be.equals(950);
        });
        describe('should be able to hit someone on 2', function(){
            melee.rangedAttack(target,50, 2);
            expect(target.getHealth()).to.be.equals(900);
        });
    });

    describe('Ranged figthers...', function(){
        target = melee;
        describe('should not be able to hit someone farther than 20', function(){
            expect(() =>  ranged.rangedAttack(target,50, 21)).to.throw(RangeError);
        });
        describe('should be able to hit someone closer than 20', function(){
            ranged.rangedAttack(target,50, 10);
            expect(target.getHealth()).to.be.equals(950);
        });
        describe('should be able to hit someone on 20', function(){
            ranged.rangedAttack(target,50, 20);
            expect(target.getHealth()).to.be.equals(900);
        });
    });
});