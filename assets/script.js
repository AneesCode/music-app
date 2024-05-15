document.querySelector(".menu-btn").addEventListener("click", abc);

function abc() {
   document.querySelector(".main-menu").classList.toggle("show");
}



let data = fetch("https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks");
let card = document.getElementById("ul-song");
let songLink = document.getElementById("card")
let songsrc = document.getElementById("song-link")
let playPause =document.getElementById("audio")
let volume =document.getElementById("range-volume")
let volIcon= document.getElementById("vol-icon")
let songName = document.getElementById("songname")
var isPlaying = false;

console.log(songLink);
console.log(card);
data.then((value1) => {
   return value1.json();
}).then((value2) => {
   for (let index = 0; index < value2.length; index++) {
      card.innerHTML += ` <li class="card" id="card" >   
       <a href="#" id="card">
       <img src="assets/images/130_168.jpg" alt="" onclick="myfunction(${index})">
       <span><img src="assets/images/23_136.png" alt=""></span>
       <span>
       <p>${value2[index].name.slice(0, 8)}</p>
       </span>
       </a></li>`;

   }
})

// songLink.addEventListener("click", ()=>{
// songName.innerHTML = value2[index].name.slice(0, 8)
// })

// let songsrc = document.getElementById("song-link")
function myfunction(data) {
   let data1 = fetch("https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks");
   let songLink = document.getElementById("card")
   data1.then((response) => {
      return response.json();
   }).then((value) => {
      for (let i = data; i <= data; i++) {
         var element = value[i].url;
         var name = value[i].name.slice(0,12);
         songsrc.src=element;
         songName.innerText = name;
      }
   })

}
function togglePlay() {
   isPlaying ? songsrc.pause() : songsrc.play();
 };
 
 songsrc.onplaying = function() {
   isPlaying = true;
   playPause.src = 'assets/images/pause.png';
 };
 songsrc.onpause = function() {
   isPlaying = false;
   playPause.src = 'assets/images/play-buttton.png';
 };



volume.addEventListener("change", function mute(e) {
songsrc.volume = e.currentTarget.value / 100;
if(songsrc.volume == 0){
   volIcon.src = 'assets/images/mute.png';
}else{
   volIcon.src = 'assets/images/volume-up-interface-symbol.png';

}
})

volIcon.addEventListener("click", function() {
   let songsrc = document.getElementById("song-link");
   songsrc.muted =! songsrc.muted;
   volIcon.src = songsrc.muted ? 'assets/images/mute.png' : 'assets/images/volume-up-interface-symbol.png';
});

