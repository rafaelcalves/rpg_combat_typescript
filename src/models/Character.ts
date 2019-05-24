export class Character {
    constructor(
        protected health: number,
        protected alive: boolean = true,
    ){}

    public beDamaged(hit:number): void {
        if(this.health > hit){
            this.health = this.health - hit;
        } else {
            this.kill();
        }
    }
    
    public isAlive(): boolean{
        return this.alive;
    };

    public kill():void {
        this.health = 0;
        this.alive = false;
    }    

    public reborn():void {
        this.alive = true;
    }

    public getHealth() : number {
        return this.health;
    }
}