// DATA
let data = {
    wedding: [
        "assets/images/1.jpg",
        "assets/images/2.jpg"
    ],
    product: [
        "assets/images/3.jpg"
    ],
    fashion: [
        "assets/images/4.jpg"
    ],
    music: [
        "assets/videos/video1.mp4",
        "assets/videos/video2.mp4"
    ]
};

let currentCategory = "wedding";
let currentIndex = 0;

let container = document.getElementById("mediaContainer");

// LOAD URL INDEX
let params = new URLSearchParams(window.location.search);
if(params.get("index")){
    currentIndex = parseInt(params.get("index"));
}

function show(){
    container.innerHTML = "";

    let file = data[currentCategory][currentIndex];

    if(file.endsWith(".mp4")){
        let video = document.createElement("video");
        video.src = file;
        video.controls = true;
        video.autoplay = true;
        container.appendChild(video);
    } else {
        let img = document.createElement("img");
        img.src = file;
        container.appendChild(img);
    }
}

function next(){
    currentIndex++;
    if(currentIndex >= data[currentCategory].length){
        currentIndex = 0;
    }
    show();
}

function prev(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = data[currentCategory].length - 1;
    }
    show();
}

function loadCategory(cat){
    currentCategory = cat;
    currentIndex = 0;
    show();
}

// INIT
show();