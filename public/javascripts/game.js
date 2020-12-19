let bg
let ship
let x = 350, y = 500

function preload() {
    bg = loadImage('/images/Background.jpg')
    ship = loadImage('/images/Spaceship.png')
}

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(bg)
    imageMode(CENTER)

    image(ship, x, y)
    imageMode(CORNER)

    move()
}

function move() {
    if (keyIsDown(LEFT_ARROW)) {
        x -= 15
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 15
    } else if (keyIsDown(UP_ARROW)) {
        y -= 15
    } else if (keyIsDown(DOWN_ARROW)) {
        y += 15
    }
}

// function keyPressed() {
//     if (keyCode == LEFT_ARROW) {
//         x -= 15
//     } else if (keyCode == RIGHT_ARROW) {
//         x += 15
//     } else if (keyCode == UP_ARROW) {
//         y -= 15
//     } else if (keyCode == DOWN_ARROW) {
//         y += 15
//     }
//
// }