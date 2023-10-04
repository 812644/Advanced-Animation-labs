//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*2 - 1, Math.random()*2 - 1);
  this.acc = new JSVector(0,0);
  this.diam = diam;
  this.clr = "rgba(255,255,0,255)";
  this.isOverlapping = false;
  return this;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {
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
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  for (let i = 0; i < bubbles.length; i++) {
    if (this !== bubbles[i]) {
      let dx = this.x - bubbles[i].x;
      let dy = this.y - bubbles[i].y;
      let d = Math.sqrt(dx * dx + dy * dy)
      if (d < this.diam) {
        this.isOverlapping = true;
        return;
      }

    }
  }
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {
  if (this.isOverlapping) {
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "blue";     // color to stroke
  } else {
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "teal";     // color to stroke
  }
  // create the circle path
  context.beginPath();    // clear old path
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);

  context.fill();     // render the fill
  context.stroke();   // render the stroke
}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  
  attr.acc.x = Math.random()*2-1;
  attr.acc.y = Math.random()*2-1;
  //  add acc code her
  if(this !== attr){
    this.acc = JSVector.subGetNew(attr.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.03);
  }
  this.vel.add(this.acc);
  this.vel.limit(3);
  this.loc.add(this.vel);
  
  
}

