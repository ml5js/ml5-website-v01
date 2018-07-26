let video;
let yolo;
let isDetecting = false;
let objects = [];

function setup() {
  createCanvas(320, 240).parent('canvasContainer');
  video = createCapture(VIDEO);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);
  
  // Hide the original video
  video.hide();
  select('#start').mousePressed(() => {
    if (!isDetecting) {
      select('#start').html('Stop');
      isDetecting = !isDetecting;
      detect();
    } else {
      isDetecting = !isDetecting;
      select('#start').html('Start');
    }
  });
}

function draw() {
  image(video, 0, 0, 320, 240);
  if (isDetecting) {
    for (let i = 0; i < objects.length; i++) {
      noStroke();
      fill(0, 255, 0);
      text(objects[i].className, objects[i].x*width, objects[i].y*height - 5);
      noFill();
      strokeWeight(4);
      stroke(0,255, 0);
      rect(objects[i].x*width, objects[i].y*height, objects[i].w*width, objects[i].h*height);
    }
  }
}

function startDetecting() {
  select('#status').html('Model loaded!')
}

function detect() {
  if (isDetecting) {
    yolo.detect(function(err, results){
      objects = results;
      detect();
    });
  }
}
