class Division {

    constructor(x,y){

        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=10;
        this.height=300;
        this.body= Bodies.rectangle(x,y,10,300,options);
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }




}