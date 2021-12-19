// INSTRUCTIONS
// Build a rock, paper, scissors game.
// The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
// Every time the user plays/clicks a button, display the winner
// A user can play as many times as they want 


// PLANNING 
// Have the variables inside of the function so that it changes everytime they click
// Random number between 1-3. 1=rock, 2=paper, 3=scissors
// Have 3 values (rock,paper,scissors) to equate to 3 if statements
// Use innerhtml or alert to display what computer played, what player played, and winner/loser


// const roShamBo = () => {
// 	const randomNumber = Math.floor(Math.random() * 3) + 1;
	
// 	const userRock = document.getElementById("rock").value
// 	// const userPaper = document.getElementById("paper").value
// 	// const userScissors = document.getElementById("scissors").value


// 	if (randomNumber === 1) {
// 		document.getElementById("p1").innerHTML = "Draw!"
// 	} else if (randomNumber === 2) {
// 		document.getElementById("p1").innerHTML = "I played paper. You lost!"
// 	} else if (randomNumber === 3) {
// 		document.getElementById("p1").innerHTML = "I played scissors. You win!"
// 	}
// };


// const roShamBo = () => {
// 	const randomNumber = Math.floor(Math.random() * 3) + 1;
// 	let rockCPU = randomNumber === 1;
// 	let paperCPU = randomNumber === 2;
// 	let scisCPU = randomNumber === 3;
	
// 	const userRock = document.getElementById("rock").value
// 	const userPaper = document.getElementById("paper").value
// 	const userScissors = document.getElementById("scissors").value


// };


const roShamBo = () => {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	// 1 = rock
	// 2 = paper
	// 3 = scissors

	document.getElementById("rock").addEventListener("click", function() {
		if (randomNumber === 1) {
			document.getElementById("p1").innerHTML = "Draw!"
		} else if (randomNumber === 2) {
			document.getElementById("p1").innerHTML = "I played paper. You lose!"
		} else if (randomNumber === 3) {
			document.getElementById("p1").innerHTML = "I played scissors. You win!"
		};
	});

	document.getElementById("paper").addEventListener("click", function() {
		if (randomNumber === 1) {
			document.getElementById("p1").innerHTML = "I played rock. You win!"
		} else if (randomNumber === 2) {
			document.getElementById("p1").innerHTML = "Draw!"
		} else if (randomNumber === 3) {
			document.getElementById("p1").innerHTML = "I played scissors. You lose!"
		};
	});

	document.getElementById("scissors").addEventListener("click", function() {
		if (randomNumber === 1) {
			document.getElementById("p1").innerHTML = "I played rock. You lose!"
		} else if (randomNumber === 2) {
			document.getElementById("p1").innerHTML = "I played paper. You win!"
		} else if (randomNumber === 3) {
			document.getElementById("p1").innerHTML = "Draw!"
		};
	});


	
};