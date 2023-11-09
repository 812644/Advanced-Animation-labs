
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
//let planet;



function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanet();
    animate();
    

}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runPlanet();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadPlanet() {
    let x = Math.random()*600;
    let y = Math.random()*600;
    let diam = 15;
    planet = new Planet(x, y, diam);
}

// move the circle to a new location
function runPlanet() {
    planet.run();
    
}

