let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceselect.add(option);
    });
};

voiceselect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceselect.value)];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
