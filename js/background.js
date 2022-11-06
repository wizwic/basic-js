const clockContainer = document.querySelector("#clock-content");
const images = ["0.png", "1.png", "2.png", "3.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgContainer = document.createElement("div");
bgContainer.id = "background";
const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;

bgContainer.appendChild(bgImage);
clockContainer.appendChild(bgContainer);