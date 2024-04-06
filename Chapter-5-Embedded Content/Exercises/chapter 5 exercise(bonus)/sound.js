const sound=["Applause","Goofy running","wake up","Explosion"];
sound.forEach((sound)=>{
const btn=document.createElement("button");
btn.classList.add("btn");
btn.innerText=sound;
btn.addEventListener("click",()=>{
    stopsongs();
    document.getElementById(sound).play();})
document.getElementById("button").appendChild(btn);

});
function stopSongs(){
    sound.forEach(sound=>{
        const song=document.getElementById(sound)
        song.pause()
        song.currentTime=0;
    })
}

const text = 
    document.getElementById("textToConvert");
const convertBtn = 
    document.getElementById("convertBtn");
 
convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');
    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = 
            new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Paying..."
    }
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
});


