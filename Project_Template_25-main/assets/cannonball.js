class CannonBall{
    constructor(x, y){
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 40, options)
        this.r = 40;
        this.image = loadImage("assets/cannonball.png");
        this.trajectory = []
        World.add(world, this.body);

    }

    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(30);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x : velocity.x, y : velocity.y});
    }
    
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();

        console.log(this.body.position.x);

        if(this.body.velocity.x > 0  &&  this.body.position.x > 300){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }

        for(var i = 0; i < this.trajectory.length; i++){
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5)
        }
    }

    
}