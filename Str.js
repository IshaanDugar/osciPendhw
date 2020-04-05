class Str{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffess: 0.01,
            length:600
        }

        this.pointB = pointB;
        this.str = Constraint.create(options);

        World.add(world, this.str);
    }

    attach(body){
        this.str.bodyA = body;
    }

    mouseAttach(bodyA){
        this.str.bodyA.position.x = mouseX;
        this.str.bodyA.position.y = mouseY;
    }
    display(){
        
            var pointA = this.str.bodyA.position;
            var pointB = this.pointB;

            push();
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
    }
}