//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel =new JSVector(Math.random()*6 - 3, Math.random()*6 - 3);
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
    context.strokeStyle = "red";  // color to fill
    context.fillStyle = "blue";     // color to stroke
  } else {
    context.strokeStyle = "blue";  // color to fill
    context.fillStyle = "red";     // color to stroke
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
  //  add acc code here
  if(this !== attr){
    this.acc = JSVector.subGetNew(attr.loc, this.loc);
    this.acc.normaize();
    this.acc.multiply(.01);
  }
  this.vel.add(this.acc);
  this.vel.limit(3);
  this.loc.add(this.vel);
  
}

