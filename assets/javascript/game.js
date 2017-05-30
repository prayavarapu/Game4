
//Variables	
var totalScore = 0;
var green_button = Math.floor((Math.random() * 12) + 1);
var red_button = Math.floor((Math.random() * 12) + 1);
var blue_button = Math.floor((Math.random() * 12) + 1);
var yellow_button = Math.floor((Math.random() * 12) + 1);
var wins = 0;
var losses = 0;

//Random Number Generator
var randomNumber = Math.floor((Math.random() * (120-19+1))+19);

$(document).ready(function() {
	
	//Display and console.log
	$("#random-number").text("Random Number: " + randomNumber);
	console.log(randomNumber);

//On-click Functions
	$("#green_gem").click(function(){
		console.log(totalScore);
		totalScore = totalScore + green_button;
		$("#total-score").text(totalScore);
	//Calling scoreboard function
		score(totalScore,randomNumber);
	//Display values on console	
		console.log(green_button);
		console.log(totalScore);

	})

	$("#red_gem").click(function(){
		console.log(totalScore);
		totalScore = totalScore + red_button;
		$("#total-score").text(totalScore);
		//Calling scoreboard function
		score(totalScore,randomNumber);
		//Display console	
		console.log(red_button);
		console.log(totalScore);
	})

	$("#blue_gem").click(function(){
		console.log(totalScore);
		totalScore = totalScore + blue_button;
		$("#total-score").text(totalScore);
		//Calling scoreboard function
		score(totalScore,randomNumber);
		//Display console
		console.log(blue_button);
		console.log(totalScore);
	})

	$("#yellow_gem").click(function(){
		console.log(totalScore);
		totalScore = totalScore + yellow_button;
		$("#total-score").text(totalScore);
		//Calling scoreboard function
		score(totalScore,randomNumber);
		//Display console
		console.log(yellow_button);
		console.log(totalScore);
	})
	 
 //Condition Statements

   console.log("totalscore: " + totalScore);

 //Function to add to scoreboard. A and B are local variables.
   function score(a,b){

   if(a === b){
   		wins++;
   		console.log("wins = " + wins);
   		//Call the reset function
   		reset();
   	}

   	else if (a > b){
   		losses++;
   		console.log("losses = " + losses);
   		//Call the reset function
   		reset();

   	}
   

//Adding the wins and losses to the counter

	var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

 document.querySelector("#wins-losses").innerHTML = html;

}


//Reset function!

	function reset() {
		totalScore = 0;
		$("#total-score").text(totalScore);
		green_button = Math.floor((Math.random() * 12) + 1);
		console.log("greenbutton:" + green_button);
		red_button = Math.floor((Math.random() * 12) + 1);
		blue_button = Math.floor((Math.random() * 12) + 1);
		yellow_button = Math.floor((Math.random() * 12) + 1);
		randomNumber = Math.floor((Math.random() * (120-19+1))+19);
		$("#random-number").text("Random Number: " + randomNumber);
		console.log("randomnumber:" + randomNumber);
	}



//document ready function ending
})
	
