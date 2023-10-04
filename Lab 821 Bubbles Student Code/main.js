
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  //  loadBubbles(200);
  let min = 1;
  let max = 100;
  loadNumbers(min, max, 200); 
  numbers.getMode();
  numbers.getMed();
  numbers.getMean();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 5 + 5;
        bubbles[i] = new Bubble(x, y, r);
    }
}

// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}

function loadNumbers(a, b, n) {
    let numbers = []
    for(let i = 0; i<n; i++){
        let num = Math.floor(Math.random()*b + a);
        numbers.push(num);
    }
    return numbers;
}

function getMean(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        count = count + arr[i];
    }
    return count / arr.length;
}

function myBubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

function getMed(arr){
    let num = myBubbleSort();
    if (arr.length % 2 === 0){
        let val = arr[arr.length] + arr[arr.length - 1];
        return val / 2;
    }
    else{
        return arr[Math.floor(arr.length/2)];
    }

}



function getMode(arr){
    let temp = []
    for(let i = 0; i<=100; i++){
        temp[i]=0;
    }
    for(let i = 0; i<arr.length; i++){
        temp[arr[i]]++;
        }
    
    let maxVal = 0;
    for(let i =0; i<=100; i++){
        if(temp[i]>maxVal){
            maxVal = temp[i];
        }
    }
    let ar1 = [];
    for(let i = 0; i<=100; i++){
        if(temp[i]===maxVal){
            ar1.push(i);
        }
    }

    return ar1;
    
}