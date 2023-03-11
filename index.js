var randomNumberOne = Math.floor(Math.random() * 6) + 1;
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

var imgNameOne = "/images/dice"+randomNumberOne+".png";
var imgNameTwo = "/images/dice"+randomNumberTwo+".png";

document.querySelector(".img1").setAttribute("src", imgNameOne);
document.querySelector(".img2").setAttribute("src", imgNameTwo);

if(randomNumberOne > randomNumberTwo){
    document.querySelector(".container h1").innerHTML = "&#127942; Player 1 Wins!";
} else if (randomNumberTwo > randomNumberOne){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! &#127942;";
} else {
    document.querySelector(".container h1").innerHTML = "&#129309; Draw! &#129309;"
}