
// Create a Ninja class

class Ninja{
// add an attribute: name

// add an attribute: health
    constructor(name, health){
        this.name = name;
        this.health = health;
        // add a attribute: speed - give a default value of 3
        this.speed = 3;
        // add a attribute: strength - give a default value of 3
        this.strength = 3;
        
    }
    // add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        console.log(this.name);
    }
    // add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log("Name: " + this.name +", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
    }

    // add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health +=10;
    }

}


// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
// create a class Sensei that inherits from the Ninja class
class Sensei extends Ninja{
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        // add an attribute: wisdom - default to 10
        this.wisdom = 10;
    }
    // create a method: speakWisdom()
    speakWisdom(){
        this.drinkSake();
        console.log("To understand what recursion is, you must first understand recursion.")
    }
}







