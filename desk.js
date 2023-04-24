img="";
status="";

function setup()
{
    canvas = createCanvas(700,600);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting Objects";
}

function preload()
{
    img=loadImage("desk.jpg");
}

function draw()
{
    image(img,0,0,700,600);
    fill("#ff0000")
    text("Desk",35,60);
    noFill();
    stroke("#FF0000"); 
    rect(30,60,750,600);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function back()
{
    window.location="iindex.html";
}