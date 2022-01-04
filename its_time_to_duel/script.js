class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }     

    attack(target){
        if( target instanceof Unit ) {
                target.res -= this.power;
            } else {
                throw new Error( "Target must be a unit!" );
            }
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == 'res'){
                target.res += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const hardAlgo = new Effect('Hard Algorithm', 2, 'Increase targets resilience by 3', 'res',3);
const unhandled = new Effect('Unhandled Promise Rejection',1,'Reduce targets resilience by 2','res',-2);
const pair = new Effect('Pair Programming',3,'Increase targets power by 2','power',2);


// instance of red belt ninja
const ninja1 = new Unit('Red Belt Ninja',3,3,4);
hardAlgo.play(ninja1);

// instance of black belt ninja
const ninja2 = new Unit('Black Belt Ninja',4,5,4);
unhandled.play(ninja2);

pair.play(ninja1);
ninja1.attack(ninja2);
console.log(ninja1);
console.log(ninja2);