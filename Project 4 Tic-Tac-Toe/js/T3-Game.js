var T3 = {
	count: 0,
	start: function () {
		$('#player1').addClass('active');
		T3.hover();
	},
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
	
	hover: function (that) {
		if ($('#player1').hasClass('active')) {
			$('.box').hover(function() {
				$(this).css('backgroundImage', 'url("img/o.svg")');
				}, function() {
					$(this).removeAttr('style');
				}
			);
		} else if ($('#player2').hasClass('active')) {
			$('.box').hover(function() {
				$(this).css('backgroundImage', 'url("img/x.svg")');
				}, function() {
					$(this).removeAttr('style');
				}
			);
		}
		
	},
	
	click: function (that) {
		
		console.log(count);
		if ( $(that).hasClass('box-filled-1') || $(that).hasClass('box-filled-2') ) {
			console.log('1st');
			return;
		}
		if ($('#player1').hasClass('active')) {
			$(that).addClass('box-filled-1');
			T3.win(that);
			console.log('2nd');
		} else {
			$(that).addClass('box-filled-2');
			T3.win(that);
			console.log('3rd');
		}
		count += 1;
		//BUG if it's 9 but it wins 
		if (count === 9) {
			T3.end(0);
		}
		console.log(count);
	},
	
	checker: function() {
		//Check each item if it has 1 or 2
		var a = $('.boxes').children();
		var z = [];
		$(a).each(function(i) {
			if ( $(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2')) {
				z.push(this);
				console.log(z);
			};
		});
	},
	
	//$('.boxes').children().length = 9 (0,1,2) x (3,4,5) x (6,7,8)
	win: function(that) {
		var a = $('.boxes').children();
		// Check if Player 1 "O" won
		if ( $(that).hasClass('box-filled-1') ) {
			if ( $(a[0]).hasClass('box-filled-1') && $(a[1]).hasClass('box-filled-1') && $(a[2]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[3]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[5]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[6]).hasClass('box-filled-1') && $(a[7]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[0]).hasClass('box-filled-1') && $(a[3]).hasClass('box-filled-1') && $(a[6]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[1]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[7]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[2]).hasClass('box-filled-1') && $(a[5]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[0]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[8]).hasClass('box-filled-1') ) {
				T3.end(1);
			} else if ( $(a[2]).hasClass('box-filled-1') && $(a[4]).hasClass('box-filled-1') && $(a[6]).hasClass('box-filled-1') ) {
				T3.end(1);
			}
		} 
		// Check if Player 2 "X" won
		else {
			if ( $(a[0]).hasClass('box-filled-2') && $(a[1]).hasClass('box-filled-2') && $(a[2]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[3]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[5]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[6]).hasClass('box-filled-2') && $(a[7]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[0]).hasClass('box-filled-2') && $(a[3]).hasClass('box-filled-2') && $(a[6]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[1]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[7]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[2]).hasClass('box-filled-2') && $(a[5]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[0]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[8]).hasClass('box-filled-2') ) {
				T3.end(2);
			} else if ( $(a[2]).hasClass('box-filled-2') && $(a[4]).hasClass('box-filled-2') && $(a[6]).hasClass('box-filled-2') ) {
				T3.end(2);
			}
		}
				
		T3.active(that);
		
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

}
