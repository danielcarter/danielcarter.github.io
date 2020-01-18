var words = ['ephedra','interferon','glorioso','leviosa','crupulus','pepsicola','leopold','visacard'];

var theWord = words[Math.floor(Math.random() * words.length)]

$(document).ready(function() {

  $('h1 span').html(theWord);

})
