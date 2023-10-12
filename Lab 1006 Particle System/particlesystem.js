function ParticleSystem(x, y, diam){
  this.parray = [50];
  for(let i = 0; i<this.parray.length; i++){
    this.parray.push(new Particle(Math.random()*600, Math.random(600), 20));
  }
  return this;
}

ParticleSystem.prototype.run = function (parent) {
    // this.checkEdges();
    // this.checkOverlapping()
    this.update(parent);
    this.render();
  }
  
  
  
  //  Sets "this.isOverlapping" to true if bubbles are overlapping
  ParticleSystem.prototype.checkOverlapping = function () {
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
  ParticleSystem.prototype.render = function () {
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

  ParticleSystem.prototype.update = function (parent){
    console.log("AGGGGGGGG")
    
  }