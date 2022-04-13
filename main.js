const msg = new SpeechSynthesisUtterance()

let voices = []

const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')


msg.text = document.querySelector('[name=text]').value

function populateVoices() {
  voices = this.getVoices()
  const voiceOptions = voices.map((voice) => `<option value="${voice.name}">${voice.name}</option>`
  ).join("")
  voicesDropdown.innerHTML = voiceOptions
}

function setVoice() {
  console.log("Changing voice")
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle()
}

function toggle() {
  speechSynthesis.cancel()
  speechSynthesis.speak(msg)
}

function setOption() {
  console.log(this.name, this.value)
  msg[this.name] = this.value
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)

options.forEach(option => option.addEventListener('change', setOption))