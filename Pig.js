class Pig{

    constructor(x,y){

        var options ={
            restitution:0.1,
            friction: 0.3,
            density:1.0
        }
        this.wbox = Bodies.rectangle(x,y,50, 50, options);
        this.width = 50;
        this.height = 50;

        World.add(myLand, this.wbox);

    }

    display(){
        push();
        translate(this.wbox.position.x, this.wbox.position.y);
        rotate(this.wbox.angle)
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();

    }

  


}