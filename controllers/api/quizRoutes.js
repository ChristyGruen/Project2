var quizButton = document.getElementById('quizbutton')
var answerButton = document.getElementById('check-answer')
var quizEl = $('.card-div');

function main(){
	console.log('main start');
}


function quickFetch(url){
  return fetch(url)
  .then( function(resp) {
    return resp.json()
  })
  .then(function(data){
    return data
  })
}

function searchApi(difficulty) {
	console.log('searchApi start')
	var locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18';
	//Check if diffuculty is specified
	if (difficulty) {
		locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=' + difficulty
	}
	else{
		locQueryUrl = 'https://opentdb.com/api.php?amount=10&category=18';
	}
	fetch(locQueryUrl)
  	.then(function (response) {
    	return response.json();
  	})
  	.then(function (data){

			for (i = 0; i < 10; i++) {
				if(data.results[i].type == 'multiple'){
					var newCard = $(`
					<div>
						<div>
							<div>${data.results[i].question}</div>
							<div class="quiz-body">
								<fieldset>
									<label>Answers</label>
									<input type="radio" name="answers"> ${data.results[i].incorrect_answers[0]}
									<input type="radio" name="answers"> ${data.results[i].incorrect_answers[1]}
									<input type="radio" name="answers"> ${data.results[i].incorrect_answers[2]}
									<input type="radio" name="answers"> ${data.results[i].correct_answer}
								</fieldset>
	
								<nav>
									<button id = 'check-answer'>Check answer</button>
								</nav>

							</div>
						</div>
					</div>`)
				}
				else{
					var newCard = $(`
					<div>
						<div>
							<div>${data.results[i].question}</div>
							<div class="quiz-body">
								<fieldset>
									<label>Answers</label>
									<input type="radio" name="answers"> ${data.results[i].incorrect_answers[0]}
									<input type="radio" name="answers"> ${data.results[i].correct_answer}
								</fieldset>
	
							<nav>
								<button id = 'check-answer'>Check answer</button>
							</nav>

							</div>
						</div>
					</div>`)
				}
				
				quizEl.append(newCard);


			}

			if (!data.results.length) {
				console.log('No results found!');
			} 
			else{
				console.log(data.results)
			}
		})

		


	.catch(function (err) {
		console.error(err);
	});
}


answerButton.addEventListener('click',function(){
	if(1<0){
		console.log('data is accesible')
	}
	else{console.log('data hidden')}




})


quizButton.addEventListener("click",function(){

	var ele = document.getElementsByName('difficulty');
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("result").innerHTML = "Difficulty: " + ele[i].value;
			var difficulty = ele[i].value;
		}
	console.log(difficulty)
	searchApi(difficulty)
})

main()