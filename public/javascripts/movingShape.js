let x = y = 0
let dir = 1

function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(0, 10)
    noStroke()
    rect(x, y, 10, 50)
    x = x + 10 * dir
    y = y + 10 * dir

    if (x == width || x == 0) {
        dir = dir * -1
    }
    console.log(x)
}