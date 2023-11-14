function Ship(x, y){
  
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.acc = new JSVector(0, 0);
  this.diam = 10;
  this.theta = 0;
  
  this.arrseg = [20];
  
  this.arrseg[0]=new Segment(this.loc.x, this.loc.y);
  for(let i = 1; i<20; i++){
    this.arrseg[i] = new Segment(this.loc.x, this.loc.y);
    
  }
  return this;
}

Ship.prototype.run = function () {
    
    this.update();
    this.render();
    this.checkEdges();
    for(let i = 0; i<20; i++){
      this.arrseg[i].run();
    }
  }


  Ship.prototype.checkEdges = function () {
    if(this.loc.x > canvas.width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y > canvas.height){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
  }
  
  
  
  
  //renders a bubble to the canvas
  Ship.prototype.render = function () {
    if (this.isOverlapping) {
      context.strokeStyle = "LightCoral";  // color to fill
      context.fillStyle = "LightCoral";     // color to stroke
    } else {
      context.strokeStyle = "LightCoral";  // color to fill
      context.fillStyle = "LightCoral";     // color to stroke
    }
    // create the circle path
    //context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.save();
    context.beginPath();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.moveTo(0, 0);
    context.lineTo(30, -10);
    context.lineTo(25, 0);
    context.lineTo(30, 10);
    context.closePath();
    context.fill();     // render the fill
    context.stroke();   // render the stroke
    context.restore();
  }

  Ship.prototype.update = function (){
    this.acc.normalize();
    this.acc.multiply(0.03);
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.loc.add(this.vel);
    
    //this.seg1.acc = JSVector.subGetNew(this.loc, this.seg1.loc);
    //this.seg2.acc = JSVector.subGetNew(this.seg1.loc, this.seg2.loc);
    this.arrseg[0].acc = JSVector.subGetNew(this.loc, this.arrseg[0].loc);
    for(let i = 1; i<20; i++){
      this.arrseg[i].acc = JSVector.subGetNew(this.arrseg[i-1].loc, this.arrseg[i].loc);
      
      
    }



    

    
  }