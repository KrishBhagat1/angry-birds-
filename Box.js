class Box{

    constructor(x,y,width, height){

        var options ={
            restitution:0.1,
            friction: 0.3,
            density:1.0
        }
        this.wbox = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;

        World.add(myLand, this.wbox);

    }

    display(){
        push();
        translate(this.wbox.position.x, this.wbox.position.y);
        rotate(this.wbox.angle)
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red");
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();

    }

  


}