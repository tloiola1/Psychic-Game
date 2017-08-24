document.getElementById("start").addEventListener("click", function(){
	
	document.getElementById("start").style.display= "none";
	document.getElementById("goAhead").style.display= "initial";

	var wins = 0;
	var losses = 0;
	var ties = 0;

	document.onkeyup = function(event){

	document.getElementById("goAhead").style.display= "none";

	var userGuess = event.key;

	var pcGuess = String.fromCharCode(Math.floor(Math.random() * 25 + 97));


	if (userGuess.toLowerCase() < String.fromCharCode(97) || userGuess.toLowerCase() > String.fromCharCode(122) ||
		userGuess < String.fromCharCode(97) || userGuess > String.fromCharCode(122)){

		document.getElementById("wrong").style.display= "initial";
	}

	else if (userGuess >= String.fromCharCode(97) || userGuess <= String.fromCharCode(122)){

		document.getElementById("wrong").style.display= "none";

		document.getElementById("youChose").innerHTML = userGuess;
		
		document.getElementById("pcChose").innerHTML = pcGuess;
		
		if(userGuess.toLowerCase() === pcGuess){
		
		wins++;
		document.getElementById("wins").innerHTML = wins;
		
		}

		else {
		
		losses++;
		document.getElementById("losses").innerHTML = losses;
		
		}
	}

};

//this top









//this bottom


});//Keep this closing tag

