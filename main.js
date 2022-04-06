function setup()
{
    canvas = createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.center()
}

function draw()
{
    image(video, 0,0,500,500)
}

function take_snapshot()
{
   save('moustahce filter.png')
}