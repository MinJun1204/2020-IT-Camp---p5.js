let dog

function setup() {
    createCanvas(800, 600)
    background(0)

    dog = loadImage('/images/Dachshund.jpg')
}

function draw() {
    image(dog, 0, 0, null, height)
}