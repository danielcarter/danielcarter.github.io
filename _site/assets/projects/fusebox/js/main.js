

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuQfdKizqCzrFnvDpaqga5Hry5EM3B44Nv7-24D-w8nReon2O9T1DkKJu-76NsA0f64X6E6KLXqEvH/pub?output=csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });

     $('.column').animate(
       {rotate: '-90deg', left: '-=90vw'}, 12000
     );

     $('.beast').animate(
       {rotate: '78deg', left: '+=40vw', top: '+=20vh'}, 8000
     );

     $('.moment').animate(
       {rotate: '25deg', left: '+=30vw', top: '-=20vh'}, 8000
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
     }, 3000)

     window.setTimeout( function() {
       $('.test_pattern').remove();
     }, 3500)

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
    $('main').append('<h1>Now Playing: ' + lines[0][3] + '<br /><span>' + lines[0][4] + '</span></h1>');

    // Build menu
    for (var i = 0; i < lines.length; i++) {
      $('nav ul').append('<li><h2>' + lines[i][3] + '</h2><p>' + lines[i][4] + '</p></li>');
      if (i % 2 != 0) {
        $('nav ul').append('<li class="arrow"></li>');
      }
    }

}

$(window).scroll(function(){

  var scrollPos = $(window).scrollTop();

  console.log(scrollPos);

});
