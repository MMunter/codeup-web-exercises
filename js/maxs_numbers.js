
console.log("I'm working");


var numbers = document.getElementsByClassName("number");
var audio = document.getElementsByTagName("audio");

for (var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        audio[i].play();
        console.log(i);
    });
}

function playclip(n){
    console.log(n);
    var audio = document.getElementsByTagName("audio")[n];
    audio.play();
}
function playclip2(){
    console.log("#2");
    var audioTwo = document.getElementsByTagName("audio")[1];
    audioTwo.play();
}
function playclip3(){
    var audioThree = document.getElementsByTagName("audio")[2];
    audioThree.play();
}

function playclip4(){
    var audioFour = document.getElementsByTagName("audio")[3];
    audioFour.play();
}
function playclip5(){
    var audioFive = document.getElementsByTagName("audio")[4];
    audioFive.play();
}

function playclip6(){
    var audioSix = document.getElementsByTagName("audio")[5];
    audioSix.play();
}

function playclip7(){
    var audio7 = document.getElementsByTagName("audio")[6];
    audio7.play();
}
function playclip8(){
    var audio = document.getElementsByTagName("audio")[7];
    audio.play();
}
function playclip9(){
    var audio = document.getElementsByTagName("audio")[8];
    audio.play();
}
function playclip10(){
    var audio = document.getElementsByTagName("audio")[9];
    audio.play();
}