var background;

function preload(){
background = loadImage("background.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

}

function draw(){
    background(background);
}