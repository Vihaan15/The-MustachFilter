noseX=0;
noseY=0;



function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    
}

function preload(){

}

function draw(){
    image(video, 0, 0, 300, 300);
fill(83,40,10);
stroke(82,40,10);
circle(0, 0, 50);

fill(83,40,10);
stroke(83,40,10);
circle(0, 300, 50);

fill(83,40,10);
stroke(83,40,40);
circle(300, 0, 50);

fill(83,40,10);
stroke(83,40,40);
circle(300, 300, 50);

}
function modleLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " +noseX)
        console.log("nose y = " +noseY)
    }
}


function take_snapshot(){
    save('myFilterImage.png');
}
