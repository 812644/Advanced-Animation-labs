
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let planet=[];



function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanet(2);
    animate();
    

}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runPlanet();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadPlanet(n) {
    for(let i = 0; i<n; i++){
      let x = Math.random()*600;
    let y = Math.random()*600;
    let diam = 15;
    planet[i] = new Planet(x, y, diam);  
    }
    
}

// move the circle to a new location
function runPlanet() {
   for(let i = 0; i<planet.length; i++){
     planet[i].run();
   }
   
    
}

