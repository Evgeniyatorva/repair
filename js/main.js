$('.review').bxSlider({
  minSlides: 1,
  maxSlides: 3,
  slideWidth: 390
});

$('.model').bxSlider({
  minSlides: 1,
  maxSlides: 5,
  slideWidth: 234
});

$( function() {
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $( "#accordion" ).accordion({
    icons: icons
  });
  $( "#toggle" ).button().on( "click", function() {
    if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
      $( "#accordion" ).accordion( "option", "icons", null );
    } else {
      $( "#accordion" ).accordion( "option", "icons", icons );
    }
  });
} );