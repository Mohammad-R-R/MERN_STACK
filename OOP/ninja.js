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
       
       console.log(this.strength);
       console.log(this.speed);
       console.log(this.health);
       

   }

   drinkSake(){
     this.health+=10;
   }


}



    const n = new Ninja("mohammad",70,50,60);
    n.saymyname();
    
    n.showStat();
    
    n.drinkSake();
  
    n.showStat();






