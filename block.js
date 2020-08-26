class Block {
    constructor(x,y,width,height) {
      var options={
        restitution:1.0
       }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
        pop()
      }
        else{
      World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
    pop();
    } 



    }
    }
  
