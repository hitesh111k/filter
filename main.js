noseX=0;
noseY=0;
function preload()
{
nose=loadImage('m.png');
}

function setup(){
   canvas = createCanvas(600,500);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(600,500)
   video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
   console.log('PoseNet Is Initialized')
}
 function draw(){
image(video,0,0,600,500);
image(nose,noseX-20,noseY+1,50,40
   );
 }
  

 function take_snapshot(){
    save('myFilterImage.png');
 }

 function gotPoses(results){
if(results.length>0)
{
   console.log(results);
   noseX=results[0].pose.nose.x;
   noseY=results[0].pose.nose.y;
   console.log("nose x =" +noseX);
   console.log("nose y =" +noseY);
}
 }
 