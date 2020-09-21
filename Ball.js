class Ball {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.3,
            'density':15,
            'friction':0.5
          
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      var angle = this.body.angle;
      
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill ("red");
      ellipse(0,0,this.radius,this.radius);
  
      pop();
    }
  }
  