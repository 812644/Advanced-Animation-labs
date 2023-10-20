function Ship(x, y){
  
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.acc = new JSVector(0, 0);
  this.diam = 10;
  return this;
}

Ship.prototype.run = function () {
    
    this.update(parent);
    this.render();
    this.checkEdges();
  }

  Ship.prototype.checkEdges = function () {
    if(this.loc.x > canvas.width){
      this.loc.x = 0;
    }
    if(this.loc.x < 0){
      this.loc.x = canvas.width;
    }
    if(this.loc.y > canvas.height){
      this.loc.y = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = canvas.height;
    }
  }
  
  
  
  
  //renders a bubble to the canvas
  Ship.prototype.render = function () {
    if (this.isOverlapping) {
      context.strokeStyle = "DarkSeaGreen";  // color to fill
      context.fillStyle = "DarkSeaGreen";     // color to stroke
    } else {
      context.strokeStyle = "DarkSlateGray";  // color to fill
      context.fillStyle = "DarkSlateGray";     // color to stroke
    }
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
    // context.save();
    // context.translate(this.loc.x, this.loc.y);
    // context.beginPath();
    // context.moveTo(20, 0);
    // context.lineTo(10, 15);
    // context.lineTo(0, 0);
    // context.closePath();
    // context.save();
  
    context.fill();     // render the fill
    context.stroke();   // render the stroke
  }

  Ship.prototype.update = function (parent){
    //this.acc = JSVector.subGetNew(parent.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.03);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(3);

    
  }