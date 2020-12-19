let api = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=cAUCnLYlK0zxNttu6KZu5N4Ts8uhzvHlKfHSGYPA"

function preload() {
    loadJSON(api, show)
}

function setup() {
    noCanvas()
}

function show(data) {
    console.log(data.photos[0])
    let src = data.photos[0].img_src
    let img = createImg(src, '')
    img.size(800, 800)
}