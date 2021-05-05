class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.constructor.name}'s name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.constructor.name}'s health increased - ${this.health}`);
        return "What one programmer can do in one month, two programmers can do in two months."
    }
}

class Sensei extends Ninja{
    constructor(name){
        super();
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log(message);
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();