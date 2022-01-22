let previous =document.querySelector("#pre");
let play =document.querySelector("#play");
let next =document.querySelector("#next");
let title =document.querySelector("#title");
let recent_volume =document.querySelector("#volume");
let volume_show =document.querySelector("#volume_show");
let slider =document.querySelector("#duration_slider");
let show_duration =document.querySelector("#show_duration");
let track_image =document.querySelector("#track_image");
let auto_play =document.querySelector("#auto");
let present =document.querySelector("#present");
let total =document.querySelector("#total");
let artist =document.querySelector("#artist");


let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');


let All_song = [
    {
        name:  "Aabaad Barbaad",
        path: "music/1.mp3",
        img: "image/ludo.jpg",
        singer: "Arjit Singh"
    },
    {
        name:  "Jaan Ban Gaye ",
        path: "music/2.mp3",
        img: "image/download.jpg",
        singer: "Vishal Mishra"
    },
    
    {
        name:  "Paani Lewan Challi",
        path: "music/3.mp3",
        img: "image/size.jpg",
        singer: "Ruchika Jangid"
    },
    
    {
        name:  "Ranjha",
        path: "music/4.mp3",
        img: "image/Ranjha.jpg",
        singer: "B Praak"
    },
    
    {
        name:  "Srivalli",
        path: "music/5.mp3",
        img: "image/Srivalli.jpg",
        singer: "Javed Ali"
    },
    

];

function load_track(index_no){
    clearInterval(timer);
    reset_slider();
     track.src = All_song[index_no].path;
    title.innerHTML =All_song[index_no].name;
    track_image.src =All_song[index_no].img;
    artist.innerHTML= All_song[index_no].singer;
    track.load();
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1
    timer = setInterval(range_slider , 1000);

}
load_track(index_no);

function mute_sound(){
    track.volume = 0;
    track.volume = 0;
    volume_show.innerHTML = 0;
}

function reset_slider(){
    slider.value = 0;
}

function justplay(){

    if (playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class= "fa fa-pause"></i>';
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class= "fa fa-play"></i>';

}

function next_song(){
    if (index_no < All_song.length - 1){
        index_no +=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no =0;
        load_track(index_no);
        playsong();

    }
}
function previous_song(){
    if (index_no > 0){
        index_no -=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no =All_song.length;
        load_track(index_no);
        playsong();

    }
}

function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100; 
}
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;

}
function autoplay_switch(){
    if(autoplay==1){
        autoplay=0;
        auto_play.style.background = "rgba(255, 255, 255, 0.2)";
    }
    else{
        autoplay =1;
        auto_play.style.background = "#FF8A65";
    }
}





function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100/track.duration);
        slider.value = position;
    }
    if (track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(autoplay==1){
            index_no+=1;
            load_track(index_no);
            playsong();
        }
    }
}
