



function main(){
	console.log('main start');
	searchApi('easy');
	searchApi('medium')
	searchApi('hard')
	searchApi()
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
	
	console.log("start fetch")
	

	fetch(locQueryUrl)
  	.then(function (response) {
    	return response.json();
  	})
  	.then(function (data){
  		console.log(data)
			console.log(data.response_code)
			
			if (!data.results.length) {
				console.log('No results found!');
			} 
			else{
				console(data.results)
			}

			console.log(data.results[0]);

		})
	.catch(function (err) {
		console.error(err);
	});
}

main()