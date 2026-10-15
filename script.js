let value = document.getElementById("value")
let increase = document.getElementById("increase")
let reset = document.getElementById("reset")
const song = new Audio("sounovamusic-om-namah-shivaya-music-mantra-meditation-402775.mp3");
let btn = document.getElementById("song")
song.loop = true; 
let count = 0
increase.addEventListener("click",function(){
    count += 1
    value.textContent = count  
})

reset.addEventListener("click", function(){
    count = 0
    value.textContent = count
})

btn.addEventListener("click", ()=>{
    if(song.paused){
        song.play()
        btn.textContent = "Pause"
    }else{
        song.pause()
        btn.textContent = "Play"
    }
})

