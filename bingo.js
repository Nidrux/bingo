(function init() {
	let numbers = document.querySelector('#numbers');
	for (let i = 1; i < 100; i++) {
		let n = document.createElement('p');
		let classes = ['num', i];
		n.classList.add(...classes);
		n.innerText = i.toString();
		numbers.appendChild(n);
	}
})();
let current = document.getElementById('current');
let numArray = new Array();
function bingo() {
	let n = Math.floor(Math.random() * 99) + 1;
	if (numArray.length >= 99) {
		maxNum();
	} else if (numArray.includes(n)) {
		console.log('is already number -> ' + n);
		bingo();
	} else {
		console.log('is new number -> ' + n);
		let curNum = document.getElementsByClassName(n)[0];
		curNum.classList.add('active');
		numArray.push(n);
		current.innerText = n.toString();
		return;
	}
}
function reset() {
	numArray = [];
	document.querySelectorAll('.active').forEach((x) => {
		x.classList.remove('active');
	});
	current.innerText = '--';
}
let infoWrapper = document.getElementById('info-wrapper');
let info = document.getElementById('info');
function maxNum() {
	info.innerText =
		'All numbers have been drawn. Clear the board if you want to play another round.';
	infoWrapper.classList.add('visible');
}
function askReset() {
	info.innerText = 'Are you sure you want to clear the board?';
	infoWrapper.classList.add('visible');
}

let newNum = document.getElementById('new');
newNum.addEventListener('click', () => {
	console.log('clicked');
	bingo();
});
let resetNum = document.getElementById('reset');
resetNum.addEventListener('click', () => {
	askReset();
});
let closeInfo = document.getElementById('close-info');
closeInfo.addEventListener('click', () => {
	infoWrapper.classList.remove('visible');
});
let clear = document.getElementById('clear-board');
clear.addEventListener('click', () => {
	infoWrapper.classList.remove('visible');
	reset();
});

window.addEventListener('keyup', (e) => {
	if (e.keyCode === 32) {
		bingo();
	} else if (e.key === 'r') {
		askReset();
	} else {
		return;
	}
});
