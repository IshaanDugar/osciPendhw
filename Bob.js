class Bob{
    constructor(x, y, width, height){
        
        this.body = Bodies.circle(x, y, width, height);

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        
        stroke("red")
        strokeWeight(3)
        fill("orange")
        
        push();
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
    mousePos(){
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
        }

    enter(){
        var newpos = this.body.position;
        newpos.x = pos.x;
        newpos.y = pos.y; 
    }
    }
