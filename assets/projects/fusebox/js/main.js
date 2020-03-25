
var animate = true;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuQfdKizqCzrFnvDpaqga5Hry5EM3B44Nv7-24D-w8nReon2O9T1DkKJu-76NsA0f64X6E6KLXqEvH/pub?output=csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });

     if (animate) {

       //$('.column').animate(
         //{rotate: '-90deg', left: '-=70vw', top: '-=10vh'}, 8000
       //);

       $('.wave').animate(
         {rotate: '+=2deg', right: '-=2vw', top: '-=1vh'}, 8000
       );

       window.setTimeout( function() {
         $('.test_pattern')
          .animate(
            {opacity: 0}, 10
          ).delay(10)
          .animate(
            {opacity: 1}, 10
          ).delay(6)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(13)
          .animate(
            {opacity: 1}, 10
          ).delay(8)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(10)
          .animate(
            {opacity: 1}, 10
          ).delay(6)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(13)
          .animate(
            {opacity: 1}, 10
          ).delay(8)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(10)
          .animate(
            {opacity: 1}, 10
          ).delay(6)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(13)
          .animate(
            {opacity: 1}, 10
          ).delay(8)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(10)
          .animate(
            {opacity: 1}, 10
          ).delay(6)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(13)
          .animate(
            {opacity: 1}, 10
          ).delay(8)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(10)
          .animate(
            {opacity: 1}, 10
          ).delay(6)
          .animate(
            {opacity: 0}, 10
          )
          .animate(
            {opacity: 0}, 10
          ).delay(13)
          .animate(
            {opacity: 1}, 10
          ).delay(8)
          .animate(
            {opacity: 0}, 10
          )
       }, 2000)

       window.setTimeout( function() {
         $('.test_pattern').remove();
         $('.off').removeClass('off');
       }, 4000)


     } // if animate
});

function processData(allText) {
    console.log("Processing...");
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    } // Read lines into array

    // Update now playing
    $('body').prepend('<h1><span class="now_playing">Now Playing:</span><br class="now_break" /> ' + lines[0][3] + '<br /><span>' + lines[0][4] + '</span></h1>');

    // Build menu
    for (var i = 0; i < lines.length; i++) {
      $('nav ul').append('<li><p class="date">' + lines[i][1] + '</p><h3>' + lines[i][3] + '</h3><p>' + lines[i][4] + '</p></li>');
      if (i % 4 == 0) {
        $('nav ul').append('<li class="arrow"></li>');
      }
      if (i == 2) {
        $('nav ul').append('<li><h3>Sell the catalog here.</h3></li>');
      }
      if (i == 4) {
        $('nav ul').append('<li><h3>Plug a sponsor here.</h3></li>');
      }
    }

}
