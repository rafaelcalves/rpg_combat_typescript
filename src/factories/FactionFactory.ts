import {Faction} from "../models/Faction"

export namespace FactionFactory {
    export function create(name: string) : Faction{
        return new Faction(name);
    }
}