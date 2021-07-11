class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }



    
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
   

    hardalgo(){
        if(this.cost>2){
        this.cost-=2;
        console.log("increase target's resilience by 3");
        this.res+=3;
        }else
        console.log("u don't have enogh cost u need 3")
    }

    Unhandled(){
        if(this.cost<1){
        this.cost-=1;
        console.log("reduce target's resilience by 2");
        this.res-=2;
        }else
        console.log("u don't have enogh cost u need 2");
    }

    Pair_Programming(){
        if(this.cost<3){
        this.cost-=3;
        console.log("increase target's power by 2");
        this.power+=3;
        }else
        console.log("u don't have enogh cost u need 3");
    }


}

const redBelt = new Unit("red-belt",3,3,4);
const blackBelt = new Unit("black-belt",4,5,4);


console.log(redBelt.res);
redBelt.hardalgo();
console.log(redBelt.res+"\n");
redBelt.Unhandled();
console.log(redBelt.res);






