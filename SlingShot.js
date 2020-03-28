class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //turning bodyA to be empty so that it is free of it's constraint of the point
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //to make the constrained line disappear when the bird flies
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    
}