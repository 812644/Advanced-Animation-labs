
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let particleSystems = [];



function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadParticlesystems(2);
    console.log("hello");
    animate();
    

}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runParticleSystems();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadParticlesystems (n) {
    for (let i = 0; i < n; i++) {
        particleSystems[i] = new ParticleSystem();
    }
}

// move the circle to a new location
function runParticleSystems() {
    for (let i = 0; i < particleSystems.length; i++) {
        particleSystems[i].run();
    }
    
}

