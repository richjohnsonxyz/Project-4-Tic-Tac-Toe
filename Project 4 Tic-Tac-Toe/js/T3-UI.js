//User Interface - Event Listeners
"use strict";
//Hide Finish Screen
$('.screen-win').hide();
//Start Game
$('.button').on('click', function () {
	T3.reset();
	T3.start();
});

//Mouseover boxes
$('.box').mouseover(function() {
	let that = this;
	T3.hover(that);
});

//var count = 0;
//Selection Made
$('.box').click(function() {
	let that = this;
	T3.click(that);
});
	
