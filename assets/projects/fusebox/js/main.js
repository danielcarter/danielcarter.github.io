$( document ).ready(function() {

  console.log("!");

  var jqxhr = $.getJSON( "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuQfdKizqCzrFnvDpaqga5Hry5EM3B44Nv7-24D-w8nReon2O9T1DkKJu-76NsA0f64X6E6KLXqEvH/pub?output=json", function() {
    console.log( "success" );
  })

  console.log(jqxhr);



});
