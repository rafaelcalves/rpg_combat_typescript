import {assert, expect} from "./Basic"
import { Faction } from "../src/models/Faction"
import { CharacterFactory } from "../src/factories/CharacterFactory";
import { FactionFactory } from "../src/factories/FactionFactory";
import { Player } from "../src/models/Player";

describe('Faction', function(){
    describe('a character should be able to...', function(){
        let char: Player = CharacterFactory.create();
        let firstFaction: Faction = FactionFactory.create("first");
        let secondFaction: Faction = FactionFactory.create("second");

        describe('join a faction', function(){
            char.joinFaction(firstFaction);
            expect(char.getFactions().length).to.be.equals(1);
        });

        describe('join another faction...', function(){
            char.joinFaction(secondFaction);
            expect(char.getFactions().length).to.be.equals(2);
        });

        describe('leave a faction', function(){
            char.leaveFaction(firstFaction);
            expect(char.getFactions().length).to.be.equals(1);
        });
    });
});