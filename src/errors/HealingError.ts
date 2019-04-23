import {AbstractError} from "./AbstractError"

export class HealingError extends AbstractError {
    constructor(message: string){
        super(message);
        //the prototype need to be setted for the assert recognition
        Object.setPrototypeOf(this, HealingError.prototype);
    }
}