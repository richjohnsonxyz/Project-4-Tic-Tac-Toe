var T3 = {
	//Keep track of the number of filled squares
	count: 0,
	//Start Game
	start: function () {
		$('#player1').addClass('active');
		T3.hover();
	},
	//Reset the game, clear the board
	reset: function () {
		$('.boxes').children().removeClass('box-filled-1 box-filled-2');
		$('#player2').removeClass('active');
		$('.message').empty();
		$('.screen-win').removeClass('screen-win-one screen-win-two screen-win-tie');
		$('#start').hide();
		$('.screen-win').hide();
		$('#board').show();	
		count = 0;
	},
	//Change Player Turns
	active: function (that) {
		if ($('#player1').hasClass('active')) {
			$('#player1').removeClass('active');
			$('#player2').addClass('active');
			T3.hover(that);
		}
		else {
			$('#player2').removeClass('active');
			$('#player1').addClass('active');
			T3.hover(that);
		}
	},
	//Show "O" or "X" hover image on blank squares
	hover: function (that) {
		$('.box').hover(function() {
			if ( $('#player1').hasClass('active') && !$(this).hasClass('box-filled-2')) {
				$(this).css('backgroundImage', 'url("img/o.svg")');
			} else if ( $('#player2').hasClass('active') && !$(this).hasClass('box-filled-1')) {
				$(this).css('backgroundImage', 'url("img/x.svg")');
			}},	function() {
				$(this).removeAttr('style');
			} 
		);
	},
	//Square is filled with either an "O" or an "X"
	click: function (that) {
		//The box is already filled - do nothing
		if ( $(that).hasClass('box-filled-1') || $(that).hasClass('box-filled-2') ) {
			return;
		}
		//Keep track of the number of filled boxes
		count += 1;
		//O's and X's
		if ($('#player1').hasClass('active')) {
			$(that).addClass('box-filled-1');
			T3.active(that);
		} else {
			$(that).addClass('box-filled-2');
			T3.active(that);
		}
		//5 boxes or more - check to see if there is a winner
		if (count >= 5) {
			T3.win(that);
		}
	},
	
	//$('.boxes').children().length = 9 (0,1,2) x (3,4,5) x (6,7,8)
	win: function(that) {
		var a = $('.boxes').children();
		
		// Check if Player 1 "O" won
		if ( $(that).hasClass('box-filled-1') ) {
			if ( $(a[0]).hasClass('box-filled-1') && $(a[1]).hasClass('box-filled-1') && $(a[2]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[3]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[5]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[6]).hasClass('box-filled-1') && $(a[7]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[0]).hasClass('box-filled-1') && $(a[3]).hasClass('box-filled-1') && $(a[6]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[1]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[7]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[2]).hasClass('box-filled-1') && $(a[5]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[0]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			} else if ( $(a[2]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[6]).hasClass('box-filled-1') ) {
				T3.end(1);
				return;
			}
		} 
		// Check if Player 2 "X" won
		else {
			if ( $(a[0]).hasClass('box-filled-2') && $(a[1]).hasClass('box-filled-2') && $(a[2]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[3]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[5]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[6]).hasClass('box-filled-2') && $(a[7]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[0]).hasClass('box-filled-2') && $(a[3]).hasClass('box-filled-2') && $(a[6]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[1]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[7]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[2]).hasClass('box-filled-2') && $(a[5]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[0]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			} else if ( $(a[2]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[6]).hasClass('box-filled-2') ) {
				T3.end(2);
				return;
			}
		}
		// IT'S A TIE - If all boxes are filled and there is no winner
		if (count === 9) {
			T3.end(0);
		}	
	},
	
	end: function(finish) {
		//player 1 wins
		if (finish === 1) {
			$('.message').append('<h4>Winner!</h4>');
			$('#board').hide();
			$('.screen-win').addClass('screen-win-one').show();
			return;
		} 
		//player 2 wins
		else if (finish === 2) {
			$('.message').append('<h4>Winner!</h4>');
			$('#board').hide();
			$('.screen-win').addClass('screen-win-two').show();
			return;
		}
		//draw
		else {
			$('.message').append("<h4>It's a Tie!</h4>");
			$('#board').hide();			
			$('.screen-win').addClass('screen-win-tie').show();
			return;
		}
	}

};
