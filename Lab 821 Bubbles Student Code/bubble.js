//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.x = x;
  this.y = y;
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
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
  if(this.x > canvas.width) this.x = 0;
  if(this.x < 0) this.x = canvas.width;
  if(this.y > canvas.height) this.y = 0;
  if(this.y < 0) this.y = canvas.height;

}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.overlapping = false;
  let b = bubbles;
  for(let i = 0; i<b.length-1; i++){
    for(let j = i+1; j<b.length; j++){
      if(this.j.x === this.i.x || this.j.y ===this.i.y){
        this.overlapping = true;
      }
    }
  }

}

// renders a bubble to the canvas
Bubble.prototype.render = function () {

}

//  update bubble every animation frame
Bubble.prototype.update = function () {

}

