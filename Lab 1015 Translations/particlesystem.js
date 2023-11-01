function ParticleSystem(){
  this.parray = [50];
  this.loc = new JSVector(Math.random()*600, Math.random()*600)
  for(let i = 0; i<5; i++){
    this.parray[i] = new Particle(this.loc.x, this.loc.y, 5);
  }
  return this;
}

ParticleSystem.prototype.run = function () {
    
    this.update();
    for(let i=0; i<this.parray.length; i++){
      this.parray[i].run();
    }
  }
  
  
  
  
  

  ParticleSystem.prototype.update = function (){
    console.log("AGGGGGGGG")
    for(let i = 0; i<this.parray.length; i++){
      // context.save();
      // context.translate(this.loc.x, this.loc.y);
      // context.rotate(.001);
      // //this.parray[i].render();
      // context.translate(0-this.loc.x, 0-this.loc.y);
      if(this.parray[i].isDead){
        this.parray = this.parray[1, this.parray.length-1];
        i--;
        console.log(i);
        
      }
    }
    this.parray.push(new Particle(this.loc.x, this.loc.y, 30));
    
  }