
const quizButton = document.getElementById('quizbutton')
const questionContainer = document.getElementById("question-container")
const checkAnswerButton = document.getElementById("check-answer")

function quickFetch(url){
  return fetch(url)
  .then( function(resp) {
    return resp.json()
  })
  .then(function(data){
    return data
  })
}

function createURL(difficulty){
	var locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18';
	//Check if diffuculty is specified
	if (difficulty) {
		locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=' + difficulty
	}
	else{
		locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18';
	}
	return locQueryUrl
}


function generateQuiz(locQueryUrl){
	quickFetch(locQueryUrl)
	.then(function(data){
		data.results.forEach((q, index) => {
			const questionEl = document.createElement("div")
			const choices = [...q.incorrect_answers,q.correct_answer]
			questionEl.innerHTML = `
				<p>${index+1}. ${q.question}</p>
				${choices.map(choice => `
					<label>
						<input type="radio" name="question-${index}" value="${choice}">${choice}
					</label>
				`).join("")}
			`;
			questionContainer.appendChild(questionEl)
		});
	
	
		checkAnswerButton.addEventListener("click", () => {
			const selectedAnswers = [];
			data.results.forEach((q, index) => {
				const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
				if (selectedOption) {
					selectedAnswers.push({ question: q.question, answer: selectedOption.value });
				}
			});
		
			// Check answers
			let score = 0;
			selectedAnswers.forEach(selected => {
				const question = data.results.find(q => q.question === selected.question);
				if (question.correct_answer == selected.answer) {
					score++;
				}
			});
			scoreDisplay = document.getElementById('score-display')
			scoreDisplay.textContent = `Score: ${score}/10`;
	
		});
	})
}


quizButton.addEventListener("click",function(){
	var ele = document.getElementsByName('difficulty');
	var difficulty;
	console.log('event listener')
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked){
			document.getElementById("result").innerHTML = "Difficulty: " + ele[i].value;
			difficulty = ele[i].value;
		}
	}
	locQueryUrl = createURL(difficulty)
	generateQuiz(locQueryUrl)
})
