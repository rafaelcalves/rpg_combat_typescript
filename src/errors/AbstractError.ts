export abstract class AbstractError extends Error {
    __proto__ = Error

    constructor(message: string) {
        super(message);
    }
}

