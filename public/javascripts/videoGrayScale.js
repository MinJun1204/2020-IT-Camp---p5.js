let cam
let x = 200, y = 50

function setup() {
    createCanvas(800, 600)
    background(200)
    cam = createCapture(VIDEO)
    cam.size(800, 600)
    cam.hide()
}

function draw() {
    // image(cam, 0, 0)
    grayscale()
    circle(x, y, 30)
    x += random(-5, 5)
    y += 10
}

function grayscale() {
    loadPixels()
    cam.loadPixels()
    // console.log(cam.pixels)
    let grayValue

    for (let i = 0; i < cam.width * cam.height; i ++) {
        grayValue = 0
        for (let j = 0; j < 3; j ++) {
            grayValue += cam.pixels[i * 4 + j]
        }

        for (let j = 0; j < 3; j ++) {
            pixels[i * 4 + j] = grayValue / 3
        }
    }
    updatePixels()
}