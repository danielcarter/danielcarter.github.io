 meSpeak.loadConfig("js/mespeak_config.json");
 meSpeak.loadVoice("js/voices/en/en.json");
 //meSpeak.setVolume(0);

var h, w;

$( document ).ready(function() {

	h = $(window).height();
	w = $(window).width();

	//secret boxes
	$('.secret.box').hover(function() {
		$(this).addClass('not-secret');
	}, function() {
		$(this).removeClass('not-secret');
	})

	//highlights
	$('[data-replace]').hover(function() {
		$('[data-replace=' + $(this).attr('data-replace') + ']').addClass('highlight');
	}, function() {
		$('[data-replace=' + $(this).attr('data-replace') + ']').removeClass('highlight');
	})

	//inputs
	$('.box input').each(function() {
	   var elem = $(this);
	   
	   // Save current value of element
	   elem.data('oldVal', elem.val());

	   // Look for changes in the value
	   elem.bind("propertychange keyup input paste", function(event){
	      // If value has changed...
	      if (elem.data('oldVal') != elem.val()) {
			makeInactive();
	       	elem.data('oldVal', elem.val());
			if (elem.val() != "") {
				$(this).parents('.box').addClass('input-filled active');
			} else {
				$(this).parents('.box').removeClass('input-filled active');
			}
	     }
	   });
	 });

	//proceeds
	$('.box').click(function() {
		//makeInactive();
		$(this).addClass('active');
	})

	$('.proceed.back').click(function() {
		unshoot();
		$(this).parents('.page').removeClass('active').prev('.page').addClass('active');
	})

	//fills
	$('.proceed').click(function() {
		if ($(this).parents('.box[data-replace]').length > 0) {
			var replace = $(this).parents('.box').attr('data-replace');
			var fill = $(this).parents('.box').children('input').val();
			$('span[data-replace=' + replace + ']').html(fill);
		}
		if ($(this).parents('.box[data-read]').length > 0) {
			var read = $(this).parents('.box').attr('data-read');
			meSpeak.speak($('span[data-read=' + read + ']').text(), {ssml: false, variant: "f2"});
		}
	})

	//enter pressed
	$('input').keypress(function(event) {
		if (event.charCode == 13) {
			if ($(this).parents('.box').children('input').val() != "")
			$(this).parents('.box').children('.proceed').click();
		}
	});

	//specifics

	$('#intro .proceed').click(function() {
		makeInactivePages();
		$('#page1').addClass('active');
		//meSpeak.speak("What is cut. What is cut by, it. What is cut by, it, in.", {ssml: false, variant: "f2"});
		return false;
	})	

	$('#stein1 .proceed').click(function() {
		makeInactive();
		$(this).parents('.box').addClass('shot');
		$('#prompt1, #secret1').removeClass('hidden').addClass('active');
		return false;
	})	

	$('#prompt1 .proceed').click(function() {
		makeInactive();
		$('.box.active').removeClass('active');
		$('#prompt2').removeClass('hidden').addClass('active');
		return false;
	})

	$('#prompt2 .proceed').click(function() {
		makeInactive();
		$('#prompt3').removeClass('hidden').addClass('active');
		return false;
	})

	$('#prompt3 .proceed').click(function() {
		makeInactive();
		$('#personal1').removeClass('hidden').addClass('active');
		return false;
	})

	$('#personal1 .proceed').click(function() {
		makeInactive();
		$(this).parents('.box').addClass('shot');		
		$('.asparagus').remove();
		makeAsparagus();
		makeProceeds();
		return false;
	})		

	$('body').on('click', '.asparagus',  function() {
		$(this).toggleClass('ice');
	})		

	$('body').on('click', '.asparagus.proceed',  function() {
		$('.asparagus.proceed').remove();
		if ($('#page1').hasClass('active')) {
			$('#page1').removeClass('active');
			$('#page2, #page2 .stein').addClass('active');
			//meSpeak.speak("Alice, Alice the pull Alice the bell Alice the coach in china, Alice the little put in leaf Alice the wedding butter meat, Alice the receptacle, Alice the back shape of mussle, mussle and soda.", {ssml: false, variant: "f2"})
			return false;
		} else if ($('#page2').hasClass('active')) {
			$('#page2').removeClass('active');
			$('#page3, #page3 .stein').addClass('active');
			placeChicken();
			goChicken();
			//meSpeak.speak("Pheasant and chicken, chicken is a peculiar third.", {ssml: false, variant: "f2"})
		} 
		
	})

	$('#stein2 .proceed').click(function() {
		makeInactive();
		$(this).parents('.box').addClass('shot');		
		$('#personal2, #personal3').removeClass('hidden').addClass('active');
		return false;
	})	

	$('#personal3 .proceed').click(function() {
		makeInactive();
		$(this).parents('.box').addClass('shot');
		$('#prompt4').removeClass('hidden').addClass('active');
		return false;
	})	

	$('#book-savarin').click(function() {
		$('#escoffier, #toklas').removeClass('active').addClass('hidden');
		$('#savarin').removeClass('hidden').addClass('active');
	})	

	$('#book-escoffier').click(function() {
		$('#toklas, #savarin').removeClass('active').addClass('hidden');
		$('#escoffier').removeClass('hidden').addClass('active');
	})	

	$('#book-toklas').click(function() {
		$('#escoffier, #savarin').removeClass('active').addClass('hidden');
		$('#toklas').removeClass('hidden').addClass('active');
	})	

	$('#prompt4 .proceed').click(function() {
		makeInactive();
		makeProceeds();
		meSpeak.speak("Alas " + $('#prompt4 input').val() + ".", {ssml: false, variant: "f2"})
	})	

	$('#stein3 .proceed').click(function() {
		makeInactive();
		$(this).parents('.box').addClass('shot');		
		$('#choice1, #personal4').removeClass('hidden').addClass('active');
	})			

	$('#morimoto-croissant').click(function() {
		var randGras = Math.floor(Math.random() * 4);
		if (randGras == 0) {
			meSpeak.speak("It was a foie gras croissant.", {ssml: false, variant: "f2"})			
		} else if (randGras == 1) {
			meSpeak.speak("It was a fwaaa graaa croissant.", {ssml: false, variant: "f2"})			
		} else if (randGras == 2) {
			meSpeak.speak("It was a foye groye croissant.", {ssml: false, variant: "f2"})			
		} else {
			meSpeak.speak("It was a fwaay groay croissant.", {ssml: false, variant: "f2"})			
		}   
	})

	$('#choice1 .choice').click(function() {
		$('body').addClass('winner');
		if ($(this).hasClass('chicken')) {
			$('#pheasant-winner').remove();
		} else {
			$('#chicken-winner').remove();
		}
		$('body').append(winnerWinner);
		$('.asparagus, .box, .proceed, .moveable').remove();
	})

})

var winnerWinner = "<div class='winner-winner'><p>Tender Buttons <br />by Gertrude Stein</p><p>a puzzle edition <br />by Daniel Carter</p><p>The print edition contains more text, more puzzles, more chickens and marginally less asparagus.</p><p><a href='#' title='Tender Buttons by Daniel Carter'>Purchase it from Monofonus Press</a>.</p></div>";

function blinkWinner() {
	setInterval(function() { alternateWinnerHover() }, 50);
}//blinkWinner

function alternateWinnerHover() {
	if ($('.choice.winner').length > 0) {
		$('.choice.winner').toggleClass('hover');
		$('.winner-winner').toggleClass('blue');
	}
}//blinkWinner

function makeInactive() {
	$('.box.active').removeClass('active');
}//makeInactive

function makeInactivePages() {
	$('.page.active').removeClass('active');
}//makeInactive

function makeAsparagus() {
	var i, j;
	i = 0;
	while(i <= w) {
		j = 0;
		while(j <= h) {
			if (Math.floor(Math.random()*11) > 3) {
				plantAsparagus(i,j);				
			}
			j+=26;
		}
		i+=26;
	}
}//makeAsparagus

function plantAsparagus(i,j) {
	$('body').append('<div data-position="' + i + 'y' + j + '" class="asparagus" style="left: ' + i + 'px; top: ' + j + 'px"></div>');
}//plantAsparagus

function plantProceed(i,j) {
	$('body').append('<div class="asparagus proceed" style="left: ' + i + 'px; top: ' + j + 'px"></div>');
}//plantProceed

function placeChicken() {
	for (var l = 0; l <= 1; l++) {
		var placed = false;
		var total_x = w / 26;
		var total_y = h / 26;
		while (!placed) {
			var x = Math.floor(Math.random() * total_x) * 26;
			var y = Math.floor(Math.random() * total_y) * 26;
			if ($("[data-position='" + x + "y" + y + "']").length <= 0) {
				$('body').append('<div class="chicken moveable" id="chicken' + l + '" style="left: ' + x + 'px; top: ' + y + 'px;" data-position="' + x + 'y' + y + '"></div>');
				placed = true;
			}
		}
	}
}//placeChicken

function goChicken() {
	setInterval(function() { moveChicken() }, 100);
}

function moveChicken() {
	
	if ($('.chicken.moveable').length > 0) {
		for (var l = 0; l <= 1; l++) {
			var position = $('#chicken' + l).attr('data-position');
			var position_pieces = position.split('y');
			var position_x = position_pieces[0];
			var position_y = position_pieces[1];
			var new_x = 0;
			var new_y = 0;
			var moved = false;

			var attempts = 0;

			while (!moved) {
				var direction = Math.floor(Math.random() * 4);

				if (direction == 0) {
					new_x = position_x;
					new_y = parseInt(position_y) + 26;
				} else if (direction == 1) {
					new_x = position_x;
					new_y = parseInt(position_y) - 26;
				} else if (direction == 2) {
					new_y = position_y;
					new_x = parseInt(position_x) + 26;
				} else if (direction == 3) {
					new_y = position_y;
					new_x = parseInt(position_x) - 26;
				}

				if (new_x >= 0 && new_x < w && new_y >= 0 && new_y < h && $(".ice[data-position='" + new_x + "y" + new_y + "']").length <= 0 && $(".chicken[data-position='" + new_x + "y" + new_y + "']").length <= 0 && $(".asparagus.proceed[data-position='" + new_x + "y" + new_y + "']").length <= 0) {
					$("[data-position='" + new_x + "y" + new_y + "']").remove();
					$('#chicken' + l).attr('data-position', new_x + "y" + new_y).css('left', new_x + 'px').css('top', new_y + 'px');
					moved = true;
				}//if good move
				else {
					attempts++;
				}
			}//while
		}//for
	}

}//moveChicken

function plantStar(i,j) {
	$('body').append('<div class="asparagus star" style="left: ' + i + 'px; top: ' + j + 'px"></div>');
}//plantStar

function makeProceeds() {
	$('.asparagus.proceed').remove();
	var i, j;
	i = 0;
	j = 0;
	while(i <= w) {
		j = 0;
		while(j <= h) {
			if ($(".asparagus[data-position='" + i + "y" + j + "']").length <= 0 && $(".proceed[data-position='" + i + "y" + j + "']").length <= 0) {
				plantProceed(i,j);								
			}
			j+=26;
		}
		i+=26;
	}

}//makeStarsProceed

function unshoot() {
	$('.shot').removeClass('shot');
}//unshoot


