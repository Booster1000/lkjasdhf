img = "";
object = [];
status = "";

function preload() {
img = loadImage("bedroom.jpg");
}

function setup() {
canvas = createCanvas(800, 500);
canvas.center();
objectDetector = ml5.objectDetector("coccossd", model_loaded);
document.getElementById("status").innerHTML = "Status - Detecting Objects⛔";
}

function model_loaded(){
    console.log("Model loaded successfully.");
    status = true;
    objectDetector.detect(img, got_result);
}

function got_result(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    object = result;
}
}

function draw() {
 image(img, 0, 0, 800, 500);
 if( status != ""){
    for(i = 0; i < object.length; i++){
        document.getElementById("status").innerHTML = "Object detected 👍";
        percent = Math.floor(object[i].confidence * 100);
        fill("#FF9700");
        text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
        noFill();
        stroke("#FF9700");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
 }
}

function g(){
    window.location = "home.html"
}