document.getElementById("start").addEventListener("click", function(){
	document.getElementById("start").style.display= "none";
	var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event){

var userGuess = event.key;

if(choices.indexOf(userGuess.toLowerCase()) > -1){

var pcGuess = choices[Math.floor(Math.random() * choices.length)];
console.log(pcGuess);
document.getElementById("youChose").innerHTML = userGuess;
document.getElementById("pcChose").innerHTML = pcGuess;

if(userGuess.toLowerCase() == pcGuess.toLowerCase()){
	wins++;
	document.getElementById("wins").innerHTML = wins;
}

else {
	losses++;
	document.getElementById("losses").innerHTML = losses;
}

}

};
});

