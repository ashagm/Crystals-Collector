
$(document).ready(function(){

const sounds = 
{
	'select': "assets/sounds/click.mp3",
	'win': "assets/sounds/win.wav",
	'start': "assets/sounds/start.mp3",
	'lose': "assets/sounds/lose.wav"
}

	let wins = 0, losses = 0;
	let $targetScore;
	let $totalScore;
	let crystalsArray = [];

	$('button').on('click', function(){
		playSound('select');
		$totalScore += parseInt($(this).val());
		$("#total-score").text($totalScore);

		displayResults();
	});

	function displayResults(){
		if($totalScore > $targetScore){
			console.log("you lost!");
			playSound('lose');
			$('#losses').text(++losses);

			setTimeout(initGame, 2000);
			
		}else if($totalScore === $targetScore){
			console.log("you win!");
			playSound('win');
			$('#wins').text(++wins);

			setTimeout(initGame, 2000);
		}
	}
	
	function getRandomNumber(lowLimit, highLimit){
		return Math.floor(Math.random() * (highLimit - lowLimit + 1) + lowLimit); //stackoverflow
	}

	function initCrystalValues(){

		crystalsArray = [];	

		for(let index = 0; index < 4; index++){
			crystalsArray.push(getRandomNumber(1, 12));	
			$('#crystal-' + index).val(crystalsArray[index]);
			console.log(index, '-', crystalsArray[index]);
		}	
	}

	function initGame(){
		console.log("Game begins....");
		playSound('start');

		$totalScore = 0;
		$targetScore = getRandomNumber(19,120);

		$('#target-score').text($targetScore);
		$("#total-score").text(0);

		initCrystalValues();
	}

	initGame();


function playSound(sound){
	console.log(sound);
	let audio = document.createElement("audio");
	audio.src = sounds[sound];
	audio.play();
}

});





