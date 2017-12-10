
$(document).ready(function(){

	let wins = 0, losses = 0;
	let $targetScore;
	let $totalScore;
	let crystalsArray = [];

	$('button').on('click', function(){
		$totalScore += parseInt($(this).val());
		$("#total-score").text($totalScore);

		if($totalScore > $targetScore){
			console.log("you lost!");
			$('#losses').text(++losses);
			initGame();
		}else if($totalScore === $targetScore){
			console.log("you win!");
			$('#wins').text(++wins);
			initGame();
		}
	});
	
	function getRandomNumber(lowLimit, highLimit){
		return Math.floor(Math.random() * (highLimit - lowLimit + 1) + lowLimit); //stackoverflow
	}

	function initGame(){
		console.log("Game begins....");
		crystalsArray = [];	
		$totalScore = 0;
		$targetScore = getRandomNumber(19,120);

		$('#target-score').text($targetScore);
		$("#total-score").text(0);

		for(let index = 0; index < 4; index++){
			crystalsArray.push(getRandomNumber(1, 12));	
			$('#crystal-' + index).val(crystalsArray[index]);
			console.log(index, '-', crystalsArray[index]);
		}	
	}

	initGame();
});





