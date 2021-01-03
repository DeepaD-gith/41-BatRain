class Drops
{
    constructor(x,y)
    {
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
       this.rain = Bodies.circle(x,y,5,options);
       this.radius = 5
       World.add(world,this.rain)
    }
    
    updateYPos()
    {//reposition the drops when they cross the canvas
       
       if(this.rain.position.y > height)
       {
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
       }
    }

    display()
    {
        var position = this.rain.position;
        console.log(" JJ " + position)
        push();
            fill('lightblue')
            ellipse(position.x,position.y,this.radius,this.radius)
        pop();
    }

}