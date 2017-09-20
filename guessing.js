/*Guessing game by Brian Chrabascz*/
/*Initialize variables*/
var totalTurns = 0; //set total numbers of turns played across 
var games = 0;
var average = 0;
var playAgain = "y";
var turns = 0
// alert("totalTurns="+totalTurns+" games="+games+" average="+average+" playAgain="+playAgain)

//start playing


	
	do {
		games ++
		var Answer = Math.floor(Math.random() * (99) + 1);
		alert(Answer)
		turns = 1
		do {
			guess = prompt("Turn #"+turns+" Guess a guess 1-100:");
			
			if (guess > Answer){
				alert("too high");
				turns++
				totalTurns++
			}
			else if (guess < Answer){
				alert("too low");
				turns++
				totalTurns++
			}
			else if(isNan(Guess){
				document.write()
			})
		}
		while (guess != Answer)
		if(guess == Answer){
			alert("Congrats.");
			turns++
			totalTurns++
		}
		alert("you found the answer in "+(turns - 1)+" turns")
		average = (totalTurns / games)
		alert("your average turns is "+average+" turns")
		alert("you have done "+games+" games so far!")
		
		playAgain = prompt("Would you like to play again? y = yes");
	}
	while (playAgain == "y");
