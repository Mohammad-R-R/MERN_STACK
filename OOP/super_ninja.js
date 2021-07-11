class Ninja {
    
    constructor(name, health,speed,strength ) {
        
        this.name = name;
        this.health = health;
        if(speed==null || strength==null){
            this.strength=3;
        this.speed=3;
        }else{
        this.speed=speed;
        this.strength =strength;
        }
       
    }


    saymyname(){
     console.log(this.name);
   }

   showStat(){
    this.saymyname();
    console.log(this.health);
       console.log(this.strength);
       console.log(this.speed);
       
       

   }

   drinkSake(){
     this.health+=10;
   }


}



    // const n = new Ninja("mohammad",70,50,60);
    // n.saymyname();
    
    // n.showStat();
    
    // n.drinkSake();
  
    // n.showStat();



    class Sensei extends Ninja{

        constructor(name) {
            super(name,210, 10, 10);
            this.name=name;
        }


speakWisdom(){
    console.log("What one programmer can do in one month, two programmers can do in two months.");
}
childFunction() {
    // by using super, we can call the parent method
    const message = super.showStat();
    
}

    }

            // example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.childFunction();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



