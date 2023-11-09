function Mover(x, y, diam){
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*2 - 1);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.snake = new Snake(this.loc.x, this.loc.y);
  return this;
}
Mover.prototype.run = function () {
 
  this.checkEdges();
  this.snake.run();
  this.update();
  this.render();
//   for(let i=0; i<this.arr.length; i++){
//     this.arr[i].run(this);
//   }
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
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


// renders a bubble to the canvas
Mover.prototype.render = function () {
  
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "teal";     // color to stroke
  
  // create the circle path
  context.beginPath();    // clear old path
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);

  context.fill();     // render the fill
  context.stroke();   // render the stroke
}
  
Mover.prototype.update = function () {
    this.acc.x = Math.random()*2-1;
    this.acc.y = Math.random()*2-1;
    this.acc.normalize();
    this.acc.multiply(.03);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
    // for(let i=0; i<this.arr.length; i++){
    //   let theta =  this.arr[i].loc.getDirection();
    //   this.arr[i].loc.x = this.or.getMagnitude()*Math.cos(theta)+this.loc.x;
    //   this.arr[i].loc.y = this.or.getMagnitude()*Math.sin(theta)+this.loc.y;

    // }
    
    
  }