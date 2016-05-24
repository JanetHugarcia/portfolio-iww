$(document).ready(function(){
  //-------------------------
    $(function(){
      $('#containerin').mixItUp();
    });
  //----------------------
	function Opacidad(){
        if ($('#foco').hasClass('white')) {
             $('#foco').fadeTo('slow',0.3)
             $('#foco').removeClass('white');
        }
        else {
        	$('#foco').fadeTo('slow',0.8); 
            $('#foco').addClass('white');
        }
    }

    setInterval(Opacidad, 1000);


  /*How to make the hero section always fill browser window?*/
  $(window).resize(function() {
          $('#hero').height($(window).height());
  }).resize();


  //---scroll animation-----
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
//stickky
  var altura = $('.navbar').offset().top;
  
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $('.navbar').addClass('menu-fixed');
    } else {
      $('.navbar').removeClass('menu-fixed');
    }
  });
 
});

