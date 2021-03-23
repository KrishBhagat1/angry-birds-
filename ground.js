class Ground{
            

    constructor(x,y,width, height){
    //properties
        var state = {
            isStatic : true
        } 



        this.ground=Bodies.rectangle(x,y,width, height,state);
        this.width=width;
        this.height=height;
        World.add(myLand,this.ground)

    }
    display(){
        push();
      rectMode(CENTER);
        fill("brown");
      rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
       pop()
        }



}