class Umbrella
{
    constructor(x,y)
    {
       var options = {isStatic:true}
       this.umbrella = Bodies.circle(x,y,60,options);
       World.add(world,this.umbrella);

       this.image = loadImage("images/Walking Frame/walking_1.png")
    }
    
   

    display()
    {

        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        // push();
           
        //     image(this.image,this.body.position.x,this.body.position.y,200,400)
        // pop();
    }

}