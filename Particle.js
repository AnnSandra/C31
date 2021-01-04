class Particle {

    constructor(x,y){
        var options ={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,8,options);
        this.r=10;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        

    }


}