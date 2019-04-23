import { AbstractError } from "./AbstractError";

export class DamagingError extends AbstractError {
    constructor(message: string){
        super(message);
        //the prototype need to be setted for the assert recognition
        Object.setPrototypeOf(this, DamagingError.prototype);
    }
}