function ParticleSystem(){
  this.parray = [50];
  this.loc = new JSVector(Math.random()*600, Math.random()*600)
  for(let i = 0; i<50; i++){
    this.parray[i] = new Particle(this.loc.x, this.loc.y, 5);
  }
  return this;
}

ParticleSystem.prototype.run = function (parent) {
    
    this.update(parent);
    for(let i=0; i<this.parray.length; i++){
      this.parray[i].run();
    }
    this.render();
  }
  
  
  
  
  //renders a bubble to the canvas
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
    for(let i = 0; i<this.parray.length; i++){
      if(this.parray[i].isDead == true){
        this.parray = this.parray[1, this.parray.length-1];
        i--;
        console.log(i);
        
      }
    }
    this.parray.push(new Particle(this.loc.x, this.loc.y, 30));
    
  }