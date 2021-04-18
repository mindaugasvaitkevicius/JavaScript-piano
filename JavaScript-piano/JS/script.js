//target the audio data key, to get the sound file
window.addEventListener('keydown', function(e){
  let target = playerSettings.currentOctave + e.keyCode 

  const audio = document.querySelector(`audio[data-keyboard="${target}"]`);

  if(!audio) return;
  audio.currentTime = 0;
  audio.volume = playerSettings.volume;
  audio.play();
});
//piano settings
let playerSettings = {
  currentOctave: 'b',
  volume: 0.2
}
//note play function
function play(target) {
  var audio = document.querySelector(`audio[data-keyboard="${target}"]`);
  audio.volume = playerSettings.volume;
  audio.currentTime = 0;
  audio.play();
};
document.addEventListener("keydown", switchOctaves, false);
function switchOctaves(e){
  if(e.keyCode === 105){ // code for when you are going up an octave
    if(playerSettings.currentOctave === 'a'){
      playerSettings.currentOctave = 'b'
     // document.getElementById("nine").style.display = "inline-block";
      var down = document.getElementById("nine");
      down.classList.remove("blurredOut");
    }else if(playerSettings.currentOctave === 'b'){
      playerSettings.currentOctave = 'c' 
      //document.getElementById("ten").style.display = "none";
      var up = document.getElementById("ten");
      up.classList.add("blurredOut");
    }
  }else if(e.keyCode === 96){ // code for when you are going down an octave
     if(playerSettings.currentOctave === 'c'){
      playerSettings.currentOctave = 'b'
     // document.getElementById("ten").style.display = "inline-block";
      var up = document.getElementById("ten");
      up.classList.remove("blurredOut");
    }else if(playerSettings.currentOctave === 'b'){
      playerSettings.currentOctave = 'a'
     // document.getElementById("nine").style.display = "none";
      var down = document.getElementById("nine");
      down.classList.add("blurredOut");
  }
}
};
//add and remove note shadow
document.addEventListener("keydown", pressedKey, false);
function pressedKey(e){
  if(e.keyCode === 97){
    var note1 = document.getElementById("note1");
    note1.classList.add("activated");
    note1 = setTimeout(removePress1, 200);
  }
  else if(e.keyCode === 98){
    var note2 = document.getElementById("note2");
    note2.classList.add("activated");
    note2 = setTimeout(removePress2, 200);
  }
  else if(e.keyCode === 99){
    var note3 = document.getElementById("note3");
    note3.classList.add("activated");
    note3 = setTimeout(removePress3, 200);
  }
  else if(e.keyCode === 100){
    var note4 = document.getElementById("note4");
    note4.classList.add("activated");
    note4 = setTimeout(removePress4, 200);
  }
  else if(e.keyCode === 101){
    var note5 = document.getElementById("note5");
    note5.classList.add("activated");
    note5 = setTimeout(removePress5, 200);
  }
  else if(e.keyCode === 102){
    var note6 = document.getElementById("note6");
    note6.classList.add("activated");
    note6 = setTimeout(removePress6, 200);
  }
  else if(e.keyCode === 103){
    var note7 = document.getElementById("note7");
    note7.classList.add("activated");
    note7 = setTimeout(removePress7, 200);
  }
  else if(e.keyCode === 104){
    var note8 = document.getElementById("note8");
    note8.classList.add("activated");
    note8 = setTimeout(removePress8, 200);
  }
}
//remove note shadow
function removePress1(){
  var note1 = document.getElementById("note1")
  note1.classList.remove("activated");
}
function removePress2(){
  var note2 = document.getElementById("note2")
  note2.classList.remove("activated");
}
function removePress3(){
  var note3 = document.getElementById("note3")
  note3.classList.remove("activated");
}
function removePress4(){
  var note4 = document.getElementById("note4")
  note4.classList.remove("activated");
}
function removePress5(){
  var note5 = document.getElementById("note5")
  note5.classList.remove("activated");
}
function removePress6(){
  var note6 = document.getElementById("note6")
  note6.classList.remove("activated");
}
function removePress7(){
  var note7 = document.getElementById("note7")
  note7.classList.remove("activated");
}
function removePress8(){
  var note8 = document.getElementById("note8")
  note8.classList.remove("activated");
}