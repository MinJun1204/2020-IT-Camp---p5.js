let video

function setup() {
    createCanvas(800, 800)
    video = createCapture(VIDEO)
    video.size(640, 480)
    video.hide()
}

function draw() {
    background(200)
    image(video, 0, 0)
}