function setup()
{
 canvas = createCanvas(600, 500);
 canvas.center();

 video = createCapture(VIDEO);
 video.size(400,400);
 video.position(10,50);

 canvas = createCanvas(800,400);
 canvas.position(430,130);

 poseNet = ml5.poseNet(video,modelDone);
 poseNet.on('pose',gotposes);
}

function draw(){
    background('#6C91C2');

    textSize(difference);
    fill("#FFE787")
    text('Peter', 50, 400);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX - rightWristX);
    }
}