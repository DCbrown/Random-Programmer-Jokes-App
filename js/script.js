document.getElementById('joke').addEventListener('click', getJoke);
document.getElementById('show').addEventListener('click', showAnswer);
const hideA = document.getElementById('answer');
const hideQ = document.getElementById('question');

// Get Jokes button from API
function getJoke() {
	fetch('http://localhost:1337/jokes')
	.then(res => res.json())
	.then(data => {
		// Randomize joke with answer then display question and hide answer
		const j = data;
		const rand = Math.floor((Math.random() * 9) + 1);
		console.log(rand);
		const question = j[rand].Q;
		const answer = j[rand].A;
		hideA.style.visibility = "hidden";
		hideQ.style.visibility = "visible";
		document.getElementById('question').innerHTML = question;
		document.getElementById('answer').innerHTML = answer;
	})
	// Show error message if failed to connect to the API
	.catch( err => document.getElementById('err').innerHTML = err );
		
}

// Show Answer button
function showAnswer() {
	hideA.style.visibility = "visible";
}