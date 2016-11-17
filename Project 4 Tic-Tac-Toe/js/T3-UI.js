//User Interface - Event Listeners
"use strict";

//Hide Finish Screen
$('.screen-win').hide();

//Start Game
$('.button').on('click', function () {
	T3.reset();
	T3.start();
});

//Selection Made
$('.box').click(function() {
	let that = this;
	T3.click(that);
});
	
	
