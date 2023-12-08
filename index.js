
var data = [
    {
        song_name : "Namo Namo",
        image : "imgs/Namo.jpg",
        song_post : "Namo%20Namo.mp3"
    },
    {
        song_name : "Enemy",
        image : "imgs/Enemy.jpg",
        song_post : "Enemy.mp3"
    },
    {
        song_name : "Sadness and Sorrow",
        image : "imgs/Naruto.jpg",
        song_post : "Naruto.mp3"
    },
    {
        song_name : "Unstoppable",
        image : "imgs/Unstoppable.jpeg",
        song_post : "Unstoppable.mp3"
    },
    {
        song_name : "Kolaveri",
        image : "imgs/Kolaveri.jpg",
        song_post : "Why%20This%20Kolaveri%20Di.mp3"
    },
    {
        song_name : "Sunshine",
        image : "imgs/Sunshine.jpg",
        song_post : "Give%20Me%20Some%20Sunshine.mp3"
    },
    {
        song_name : "Ankhein",
        image : "imgs/Aankhein.jpg",
        song_post : "Aankhein%20Vilen.mp3"
    },
    {
        song_name : "Khalasi",
        image : "imgs/Khalasi.jpg",
        song_post : "Khalasi.mp3"
    }
]

const displayContainer = document.querySelector(".container");

const displayMethod = ()=> {
    data.map((displayData)=> {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <div class="card" onclick="openPopup('${displayData.image}', '${displayData.song_post}', '${displayData.song_name}')">
            <img src="${displayData.image}" class="thumbnails">
            <h2 class="name">${displayData.song_name}</h2>
        </div>
        `
        displayContainer.appendChild(postElement);
    })
}

displayMethod()

let popup = document.getElementById("popup-player");
let container = document.getElementById("container");
var x = document.getElementById("audio-player");

var popup_name = document.getElementById("popup_name");
var popup_image = document.getElementById("popup_image");
var song_prefix = "Enter your CloudFront Distribution Domain";
var song = document.getElementById("player_song");

function openPopup(image_path, song_postfix, p_name){
    popup_name.innerHTML = p_name;
    popup_image.src = image_path;
    song.src = song_prefix + song_postfix;
    popup.classList.add("open-popup");
    container.classList.add("container-blur");
    x.load();
    x.play();
    x.playbackRate = 1;
}
function closePopup(){
    popup.classList.remove("open-popup");
    container.classList.remove("container-blur");
    x.pause();
}

