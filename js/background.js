const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
]

const randomImage = images[Math.floor(Math.random()*images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = randomImage;

document.body.appendChild(backgroundImage);