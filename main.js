window.addEventListener('load', init);
//Globals

//available levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 2
}

//to change level
const curentLevel = levels.easy;


let time = curentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
	'makan',
	'salto',
	'guling',
	'bangun',
	'berserakan',
	'tabur',
	'seragam',
	'berantakan',
	'bertaburan',
	'minyak',
	'kuasa',
	'pengamen',
	'masakan',
	'pembangunan',
	'perkembangan',
	'teknologi',
	'kasmaran',
	'bungkus',
	'bingung',
	'santuy',
	'berandalan',
	'basi',
	'tikungan',
	'jaman',
	'bekicot',
	'kesimpulan',
	'titisan',
	'cengkok'

];

//initialize game

function init(){
	//show number of seconds
	seconds.innerHTML = curentLevel;

	//Load word from array
	showWord(words);
	
	//start matching on word input
	wordInput.addEventListener('input', startMatch);


	//call countdown every second
	setInterval(countdown, 1000);

	//check gam status
	setInterval(checkStatus, 50);
}

//start match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = curentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	//if score is -1, display 0

	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
}

//Match current word
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct!!!';
		return true;
	} else {
		message.innerHTML = ''
		return false;
	}	
}

//pick and show random word
function showWord(words){
	//Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	//Ouput random word
	currentWord.innerHTML = words[randIndex];

}

//countdown timer
function countdown(){
	//make sure time is not run out

	if(time > 0){
		//Decrement
		time--;
	}else if(time === 0){
		//Game is over
		isPlaying = false;
	}

	//Show time
	timeDisplay.innerHTML = time;
}

function checkStatus(){
	if(!isPlaying && time ===0){
		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
}