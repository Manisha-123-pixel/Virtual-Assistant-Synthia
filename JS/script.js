let voice = document.querySelector("#voice")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-IN"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) { 
        speak("Good Morning")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon")
    }
    else {
        speak("Good Evening")
    }
}
window.addEventListener('load', ()=> {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult =(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    let content = document.querySelector("#content")
content.innerText=transcript
    takeCommand(transcript)
}


document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        recognition.start()
        btn.style.display="none"
voice.style.display="block"

    });
});


function takeCommand(message) {
btn.style.display="flex"
voice.style.display="none"

// function handleMessage(message) {
    message = message.toLowerCase(); // Convert message to lowercase

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, designed by Manisha.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube");
    window.open("https://www.youtube.com/", "_blank");
        
    } 
    else if (message.includes("open google")) {
        speak("Opening google");
    window.open("https://www.google.com/", "_blank");
        
    } 
        else if (message.includes("open facebook")) {
        speak("Opening facebook");
    window.open("https://www.facebook.com/", "_blank");
        
    } 
    else if (message.includes("open linkedin")) {
        speak("Opening linkedin");
    window.open("https://www.inkedin.com/", "_blank");
        
    } 
    else if (message.includes("open music")) {
        speak("Opening music");
    window.open("https://www.yotubemusic.com/", "_blank");
        
    } 
    
else if (message.includes("open calculator")) {
    speak("Opening calculator");
window.open("calculator://");
    } 
    else if (message.includes("time")) {
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    
        } 
        else if (message.includes("date")) {
            let time=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
            speak(time);
        
            } 
    
        else 
            {
                let finalText="this is what i found on internet regarding" +message.replace("Synthia","") || message.replace("Cynthia","")
            
            speak(finalText)
            window.open(`https://www.google.com/search?q=${encodeURIComponent(message.replace("cynthia", ""))}`, "_blank");
        } 
    
    
}


