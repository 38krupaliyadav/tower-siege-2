class Box{
    constructor(x,y){
        var options = {
         'restitution':0.01,
         'friction': 1.0,
         'density': 0.4
        }
        this.body = Bodies.rectangle(x,y, 35, 50,options);
       
        World.add(world, this.body);
        this.visibility = 255; 
        };
       display(){
       var pos = this.body.position;    
       if(this.body.speed <3){
       var angle = this.body.angle; 
       var pos= this.body.position; 
       push(); 
       translate(pos.x, pos.y); 
       rotate(angle); 
       rectMode(CENTER);
       rect(0,0,this.width, this.height);
       pop();
       }
       else{
       World.remove(world, this.body);
       push(); 
       this.visibility = this.visibility -2; 
       pop(); }

     }
   }