class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resiliance){
    super(name, cost);
    this.power = power;
    this.resiliance = resiliance;
    }
    attack(target){
        target.resiliance -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "resiliance"){
                if(this.name =="Hard Algorithm"){
                    target.resiliance += this.magnitude;
                }else if (this.name == "Unhandled Promise Rejection"){
                    target.resiliance -= this.magnitude;
                }
            } else if (this.stat =="power"){
                target.power += this.magnitude;
            }
        } else{
            throw new Error("Target must be a Unit")
        }
    }
}


// Make an instance of Unit called "Red Belt Ninja"
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// Make an instance of Unit called "Black Belt Ninja"
const BlackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);

// Make an instance of Effect called "Hard Algorithm"
const HardAlgoEffect = new Effect("Hard Algorithm", 2, "Increase target's resiliance by 3", "resilience", 3);

// Make an instance of Effect called "Unhandled Promise Rejection"
const UnhandledPromiseEffect = new Effect("unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", 2);

// Make an instance of Effect called "Pair Programming"
const PairProgrammingEffect = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)

// Play out the scenario described above
//Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
HardAlgoEffect.play(RedBeltNinja);
// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
UnhandledPromiseEffect.play(RedBeltNinja);
//Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
PairProgrammingEffect.play(RedBeltNinja);
//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
RedBeltNinja.attack(BlackBeltNinja);