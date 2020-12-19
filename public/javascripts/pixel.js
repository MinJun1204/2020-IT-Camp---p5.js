let dog

function preload() {
    dog = loadImage('/images/Dachshund.jpg')
}

function setup() {
    createCanvas(dog.width, dog.height * 2)
    background(200)
    image(dog, 0, 0)

    console.log(dog)
    gray()
}

function gray() {
    loadPixels()
    dog.loadPixels()
    let grayValue

    for (let i = 0; i < dog.width * dog.height; i ++) {
        grayValue = 0
        for (let j = 0; j < 3; j ++) {
            grayValue += dog.pixels[i * 4 + j]
        }

        for (let j = 0; j < 3; j ++) {
            pixels[i * 4 + j + dog.width * dog.height * 4] = grayValue
        }
    }
    updatePixels()
}