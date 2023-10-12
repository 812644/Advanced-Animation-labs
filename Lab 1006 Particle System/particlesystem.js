function ParticleSystem(x, y, diam){
  this.parray = [50];
  for(let i = 0; i<this.parray.length; i++){
    
  }
  return this;
}

Orbiter.prototype.run = function (parent) {
    // this.checkEdges();
    // this.checkOverlapping()
    this.update(parent);
    this.render();
  }
  
  //  Check to see if buuble leaves canvas area and reposition in necessary
  Orbiter.prototype.checkEdges = function () {
    if(this.loc.x > canvas.width){
      this.vel.x = 0 - this.vel.x;
    }
    if(this.loc.x < 0){
      this.vel.x = 0 - this.vel.x;
    }
    if(this.loc.y > canvas.height){
      this.vel.y = 0 - this.vel.y;
    }
    if(this.loc.y < 0){
      this.vel.y = 0 - this.vel.y;
    }
  }
  
  //  Sets "this.isOverlapping" to true if bubbles are overlapping
  Orbiter.prototype.checkOverlapping = function () {
    this.isOverlapping = false;
    for (let i = 0; i < movers.length; i++) {
      if (this !== movers[i]) {
        let dx = this.x - movers[i].x;
        let dy = this.y - movers[i].y;
        let d = Math.sqrt(dx * dx + dy * dy)
        if (d < this.diam) {
          this.isOverlapping = true;
          return;
        }
  
      }
    }
  }
  
  // renders a bubble to the canvas
  Orbiter.prototype.render = function () {
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
  
    context.fill();     // render the fill
    context.stroke();   // render the stroke
  }

  Orbiter.prototype.update = function (parent){
    console.log("AGGGGGGGG")
    this.theta+=0.01
    this.loc.x = parent.loc.x+Math.cos(this.theta)*75;
    this.loc.y = parent.loc.y+Math.sin(this.theta)*75;
  }