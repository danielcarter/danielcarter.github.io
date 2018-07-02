$( document ).ready(function() {

	$('header h1 span a').bind('click', function() {
		$('nav').toggleClass('hidden');
	})

	$('body.gallery div.gallery:odd').addClass('gallery-right');
	$('body.gallery div.gallery:even').addClass('gallery-left');

	$('table td:has(strong.week)').addClass('week');

});
