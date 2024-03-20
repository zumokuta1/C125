noseX = 0;
noseY = 0;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function gotPoses(results){
    if (results.length>0){
      noseX = results[0].pose.nose.x -25;
      noseY = results[0].pose.nose.y -25;
      console.log('noseX ='+ results[0].pose.nose.x)
      console.log('noseY ='+ results[0].pose.nose.y)
  }
}
function draw() {
  image(video, 0, 0, 400, 400)
  image(clown_nose, noseX, noseY, 50, 50)
}

function modelLoaded(){
    console.log('¡El modelo cargo exitosamente papu!')
}

function preload() {
   clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png ')
}

function take_snapshot(){
    save('Imagen')
}