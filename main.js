function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 320, 240);
    fill(200, 0, 0);
    circle(580, 50, 70);
    circle(580, 420, 70);
    circle(60, 420, 70);
    circle(60, 60, 70);
    rect(50, 30, 20, 420);
    rect(50, 40, 500, 20);
    rect(50, 410, 500, 20);
    rect(530, 30, 20, 420);
}

function take_snapshot()
{
    save('friends.png');
}

